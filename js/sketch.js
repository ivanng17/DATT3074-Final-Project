let temps = [-4.54, -4.13, -0.05, 6.59, 13.95, 19.16, 21.89, 20.99, 16.11, 10.41, 4.46, -0.72, -5.01, -2.96, 1.57, 8.5, 13.16, 19.6, 22.29, 21.15, 16.09, 10.53, 4.87, -1.04, -3.6, -3.88, 2.17, 8.39, 13.45, 19.26, 21.86, 21.65, 16.97, 10.74, 5.22, -1.09, -5.21, -3.49, 1.75, 8.25, 13.72, 19.53, 21.84, 21.28, 17.03, 11.38, 5.37, -1.33, -3.79, -4.57, 1.11, 8.6, 13.41, 19.83, 22.29, 21.06, 17.26, 10.91, 5.22, -1.81, -3.38, -4.14, 0.81, 7.13, 12.83, 20.05, 22.08, 21.72, 17.22, 10.8, 5.82, 0.01, -3.22, -3.09, 1.71, 8.2, 13.55, 19.34, 22.32, 21.9, 17.35, 10.72, 4.59, -0.21, -3.68, -2.62, 1.26, 8.91, 13.44, 19.32, 22.12, 21.46, 16.48, 10.62, 5.06, -0.54, -1.93, -2.87, 2.03, 8.16, 14.49, 18.89, 22.16, 21.49, 17.31, 10.68, 4.86, -0.64, -3.89, -3.42, 1.72, 8.9, 14.23, 20.27, 22.09, 22.27, 17.21, 12.03, 6.42, -1.07, -4, -4.62, 0.27, 7.82, 14.46, 20.07, 22.17, 21.57, 17.66, 11.99, 5.57, -0.86];
let precipitation = [73.57, 55.35, 70.35, 76.11, 60.89, 64.49, 66.75, 85.19, 66.55, 70.46, 77.35, 75.15, 77.98, 60.74, 80.83, 74.95, 70.69, 76.1, 62.29, 75.34, 94.29, 52.78, 82.23, 68.87, 69.87, 65.44, 79.78, 84.16, 61.34, 77.97, 58.77, 76.01, 68.42, 69.9, 96.39, 82.38, 74.01, 63.47, 76.27, 83.7, 68.64, 74.03, 71.48, 101.97, 79.25, 65.99, 88.5, 74.02, 78.94, 63.71, 89.6, 77.75, 71.97, 60.66, 59.45, 72.21, 66.51, 79.1, 90.21, 67.98, 85.57, 56.15, 72.06, 96.29, 52.6, 61.76, 73.77, 68.39, 57.41, 66.89, 98.52, 76.83, 68.61, 68.63, 67.23, 72.44, 70.57, 79.49, 62.51, 77.82, 55.81, 71.27, 98.77, 78.61, 68.99, 57.69, 72.19, 81.66, 67.54, 61.95, 68.12, 83.73, 78.88, 57.78, 84.96, 85.75, 75.39, 58.86, 82.17, 75.36, 58.74, 79.2, 63.72, 81.77, 67.23, 68.63, 75.4, 62.05, 66.57, 76.27, 82.46, 76.37, 64.2, 80.65, 67.35, 69.15, 59.39, 74.84, 81.63, 72.98, 75.09, 51.69, 77.15, 86.48, 64.59, 79.73, 66.23, 71.51, 62.59, 61.86, 92.31, 81.35]
let dates = ["January 2014", "February 2014", "March 2014", "April 2014", "May 2014", "June 2014", "July 2014", "August 2014", "September 2014", "October 2014", "November 2014", "December 2014", "January 2015", "February 2015", "March 2015", "April 2015", "May 2015", "June 2015", "July 2015", "August 2015", "September 2015", "October 2015", "November 2015", "December 2015", "January 2016", "February 2016", "March 2016", "April 2016", "May 2016", "June 2016", "July 2016", "August 2016", "September 2016", "October 2016", "November 2016", "December 2016", "January 2017", "February 2017", "March 2017", "April 2017", "May 2017", "June 2017", "July 2017", "August 2017", "September 2017", "October 2017", "November 2017", "December 2017", "January 2018", "February 2018", "March 2018", "April 2018", "May 2018", "June 2018", "July 2018", "August 2018", "September 2018", "October 2018", "November 2018", "December 2018", "January 2019", "February 2019", "March 2019", "April 2019", "May 2019", "June 2019", "July 2019", "August 2019", "September 2019", "October 2019", "November 2019", "December 2019", "January 2020", "February 2020", "March 2020", "April 2020", "May 2020", "June 2020", "July 2020", "August 2020", "September 2020", "October 2020", "November 2020", "December 2020", "January 2021", "February 2021", "March 2021", "April 2021", "May 2021", "June 2021", "July 2021", "August 2021", "September 2021", "October 2021", "November 2021", "December 2021", "January 2022", "February 2022", "March 2022", "April 2022", "May 2022", "June 2022", "July 2022", "August 2022", "September 2022", "October 2022", "November 2022", "December 2022", "January 2023", "February 2023", "March 2023", "April 2023", "May 2023", "June 2023", "July 2023", "August 2023", "September 2023", "October 2023", "November 2023", "December 2023", "January 2024", "February 2024", "March 2024", "April 2024", "May 2024", "June 2024", "July 2024", "August 2024", "September 2024", "October 2024", "November 2024", "December 2024"]
const canvas = document.getElementById("myCanvas");
let lineY = 500/2;
let barHeight = 0;

function draw(counter) {
  const back = canvas.getContext("2d");
  back.fillStyle = "white";
  back.fillRect(0, 0, 500, 500);

  const rain1 = canvas.getContext("2d");
  const raingradient = rain1.createLinearGradient(0, 0, 0, 100);
  raingradient.addColorStop(0, "rgb(0, 0, 127)");
  raingradient.addColorStop(1, "rgb(100, 100, 255)");
  rain1.fillStyle = raingradient;
  rain1.fillRect(13, 0, 25, barHeight + precipitation[counter]);

  const rain2 = canvas.getContext("2d");
  const raingradient2 = rain2.createLinearGradient(0, 0, 0, 100);
  raingradient2.addColorStop(0, "rgb(0, 0, 127)");
  raingradient2.addColorStop(1, "rgb(100, 100, 255)");
  rain2.fillStyle = raingradient2;
  rain2.fillRect(63, 0, 25, barHeight + precipitation[counter]);

  const rain3 = canvas.getContext("2d");
  const raingradient3 = rain3.createLinearGradient(0, 0, 0, 100);
  raingradient3.addColorStop(0, "rgb(0, 0, 127)");
  raingradient3.addColorStop(1, "rgb(100, 100, 255)");
  rain3.fillStyle = raingradient3;
  rain3.fillRect(113, 0, 25, barHeight + precipitation[counter]);

  const rain4 = canvas.getContext("2d");
  const raingradient4 = rain4.createLinearGradient(0, 0, 0, 100);
  raingradient4.addColorStop(0, "rgb(0, 0, 127)");
  raingradient4.addColorStop(1, "rgb(100, 100, 255)");
  rain4.fillStyle = raingradient4;
  rain4.fillRect(163, 0, 25, barHeight + precipitation[counter]);

  const rain5 = canvas.getContext("2d");
  const raingradient5 = rain5.createLinearGradient(0, 0, 0, 100);
  raingradient5.addColorStop(0, "rgb(0, 0, 127)");
  raingradient5.addColorStop(1, "rgb(100, 100, 255)");
  rain5.fillStyle = raingradient5;
  rain5.fillRect(213, 0, 25, barHeight + precipitation[counter]);

  const rain6 = canvas.getContext("2d");
  const raingradient6 = rain6.createLinearGradient(0, 0, 0, 100);
  raingradient6.addColorStop(0, "rgb(0, 0, 127)");
  raingradient6.addColorStop(1, "rgb(100, 100, 255)");
  rain6.fillStyle = raingradient6;
  rain6.fillRect(263, 0, 25, barHeight + precipitation[counter]);

  const rain7 = canvas.getContext("2d");
  const raingradient7 = rain7.createLinearGradient(0, 0, 0, 100);
  raingradient7.addColorStop(0, "rgb(0, 0, 127)");
  raingradient7.addColorStop(1, "rgb(100, 100, 255)");
  rain7.fillStyle = raingradient7;
  rain7.fillRect(313, 0, 25, barHeight + precipitation[counter]);

  const rain8 = canvas.getContext("2d");
  const raingradient8 = rain8.createLinearGradient(0, 0, 0, 100);
  raingradient8.addColorStop(0, "rgb(0, 0, 127)");
  raingradient8.addColorStop(1, "rgb(100, 100, 255)");
  rain8.fillStyle = raingradient8;
  rain8.fillRect(363, 0, 25, barHeight + precipitation[counter]);

  const rain9 = canvas.getContext("2d");
  const raingradient9 = rain9.createLinearGradient(0, 0, 0, 100);
  raingradient9.addColorStop(0, "rgb(0, 0, 127)");
  raingradient9.addColorStop(1, "rgb(100, 100, 255)");
  rain9.fillStyle = raingradient9;
  rain9.fillRect(413, 0, 25, barHeight + precipitation[counter]);

  const rain10 = canvas.getContext("2d");
  const raingradient10 = rain10.createLinearGradient(0, 0, 0, 100);
  raingradient10.addColorStop(0, "rgb(0, 0, 127)");
  raingradient10.addColorStop(1, "rgb(100, 100, 255)");
  rain10.fillStyle = raingradient10;
  rain10.fillRect(463, 0, 25, barHeight + precipitation[counter]);
  
  const ctx3 = canvas.getContext("2d");
  ctx3.fillStyle = "red";
  ctx3.fillRect(0, lineY - (temps[counter] * 2), 500, 500);
  
  const labelBack = canvas.getContext("2d");
  labelBack.fillStyle = "white";
  labelBack.fillRect(125, 380, 250, 100);

  const label1 = canvas.getContext("2d");
  label1.font = "20px Arial";
  label1.fillStyle = "black";
  label1.fillText(dates[counter], 250, 400); 
  label1.textAlign = "center";
  
  const label2 = canvas.getContext("2d");
  label2.font = "20px Arial";
  label2.fillStyle = "black";
  label2.fillText("Temperature: " + temps[counter] + "° C", 250, 430); 
  label2.textAlign = "center";

  const label3 = canvas.getContext("2d");
  label3.font = "20px Arial";
  label3.fillStyle = "black";
  label3.fillText("Precipitation: " + precipitation[counter] + "mm", 250, 460); 
  label3.textAlign = "center";

  }
