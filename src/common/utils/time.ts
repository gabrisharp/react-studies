// 00:00:00 → sec
export function convertToSeconds(time:string) {
  let [hr ='0', min = '0', sec ='0'] = time.split(':') ;
  let totalHr = Number(hr) * 3600;
  let totalMin = Number(min) * 60;
  let total = Number(sec) + totalHr + totalMin;
  return total;
}