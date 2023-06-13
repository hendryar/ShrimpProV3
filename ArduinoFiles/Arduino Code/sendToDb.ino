#include <LiquidCrystal_I2C.h>
#include <WiFi.h>
#include <HTTPClient.h>

LiquidCrystal_I2C lcd(0x27, 16, 2); // I2C address 0x27, 16 column and 2 rows

const char WIFI_SSID[] = "SRZ";
const char WIFI_PASSWORD[] = "11121314";

const int potPin = 34;

String HOST_NAME = "http://192.168.0.100"; // change to your PC's IP address
String PATH_NAME   = "/esp32/index.php";

int potValue = 0;
int waterValue = 0;

void setup()
{
  Serial.begin(115200);
 
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.println("Connecting");
  
  while(WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  
  lcd.begin(); // initialize the lcd
  lcd.backlight();
}

void loop()
{
  potValue = analogRead(potPin);

  lcd.clear();                 // clear display
  lcd.setCursor(0, 0);         // move cursor to   (0, 0)
  
  String timestamp = String(millis());
  
  lcd.print("POT: ");        // print message at (0, 0)
  
  lcd.setCursor(0, 1);         // move cursor to   (2, 1)
  
  float barGraph = (potValue / 256);
  
  char toBePrinted[16] = "";
  
  for(int i =0; i < (int)barGraph; ++i){
    toBePrinted[i] = '#';
  }
  
  lcd.print(potValue);
  
  String buffer1 = String(potValue);
  
  String queryString = "?potentiometer=" + buffer1 + "&timestamp=" + timestamp + "&serial_number=123456789";
  
  HTTPClient http;
  
  http.begin(HOST_NAME + PATH_NAME + queryString); //HTTP
  
  int httpCode = http.GET();
  
    // httpCode will be negative on error
    if(httpCode > 0) {
      // file found at server
      if(httpCode == HTTP_CODE_OK) {
        String payload = http.getString();
        Serial.println(payload);
      } else {
        // HTTP header has been send and Server response header has been d
        Serial.printf("[HTTP] GET... code: %d\n", httpCode);
      }
    } else {
      Serial.printf("[HTTP] GET... failed, error: %s\n", http.errorToString(httpCode).c_str());
    }

    delay(10000);
}