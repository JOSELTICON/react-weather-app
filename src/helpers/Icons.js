const Icons = (icon) => {
  switch (icon) {
    case "Thunderstorm":
      icon = "./icons/thunderstorm-rain";
      break;
    case "Drizzle":
      icon = "./icons/drizzle-rain";
      break;
    case "Rain":
      icon = "./icons/rain";
      break;
    case "Snow":
      icon = "./icons/snowy";
      break;
    case "Clear":
      icon ="/icons/clear-day";
      break;
    case "Atmosphere":
      icon = "./icons/weather";
      break;
    case "Clouds":
      icon = "./icons/fog";
      break;
    case "Fog":
      icon = "./icons/fog";
      break;
    case "Haze":
      icon = "./icons/haze";
      break;
    case "Smoke":
      icon = "./icons/smoke";
      break;
    default:
      icon = "./icons/clear-day";
      break;
  }
  return icon
};
export default Icons;
