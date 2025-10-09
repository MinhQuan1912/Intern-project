export function useCountdown(target: string | Date) {
  const days = ref("00");
  const hours = ref("00");
  const minutes = ref("00");
  const seconds = ref("00");

  let timer: ReturnType<typeof setInterval>;

  const updateCountdown = () => {
    const now = new Date().getTime();
    const end = new Date(target).getTime();
    const distance = end - now;

    if (distance <= 0) {
      days.value = hours.value = minutes.value = seconds.value = "00";
      clearInterval(timer);
      return;
    }
    const totalSeconds = Math.floor(distance / 1000);
    const d = Math.floor(totalSeconds / 86400); // 86400 giây = 1 ngày
    const h = Math.floor((totalSeconds % 86400) / 3600); // 3600 giây = 1 giờ
    const m = Math.floor((totalSeconds % 3600) / 60); // 60 giây = 1 phút
    const s = totalSeconds % 60;
    days.value = String(d).padStart(2, "0");
    hours.value = String(h).padStart(2, "0");
    minutes.value = String(m).padStart(2, "0");
    seconds.value = String(s).padStart(2, "0");
  };
  onMounted(() => {
    updateCountdown();
    timer = setInterval(updateCountdown, 1000);
  });

  onUnmounted(() => {
    clearInterval(timer);
  });

  return { days, hours, minutes, seconds };
}
