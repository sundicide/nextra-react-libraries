import MyWeatherDataJson from "@/assets/my_weather_data.json"

export default function handler(req, res) {
  res.status(200).send(MyWeatherDataJson)
}