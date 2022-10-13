import moment from "moment";

const getWeekday = (date) => moment(date).format("dddd").substring(0, 3);

const getUpcomingDaysForecast = (data) => {
  const upcomingDays = [];
  data.slice(1).map((day,i) => {
    if(i==5|| i==13 || i==20 || i==28 || i==36){
      upcomingDays.push({
        icon: day.weather[0].icon,
        temperature: Math.round(day.main.temp_max),
        weekday: getWeekday(day.dt_txt),
      })
    }   
  });
  return upcomingDays;
}

export default getUpcomingDaysForecast;
