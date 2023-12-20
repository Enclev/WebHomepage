// 체크한 상태를 저장할 객체
const checks = {
    morning: false,
    evening: false,
    morningWalk: false,
    eveningWalk: false,
    nightWalk: false
  };
  
  // 체크 상태를 초기화하는 함수
  function resetChecks() {
    for (const key in checks) {
      checks[key] = false;
      document.getElementById(key).checked = false;
    }
  }
  
  // 아침과 저녁 식사 체크 함수
  function checkMeal(meal) {
    checks[meal] = !checks[meal];
  }
  
  // 산책 체크 함수
  function checkWalk(walk) {
    checks[walk] = !checks[walk];
  }
  
  // 특정 시간에 초기화하는 함수
  function resetAtNoon() {
    const now = new Date();
    const noon = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0, 0);
  
    // 현재 시간이 정오 이후라면 다음 날 정오로 설정
    if (now >= noon) {
      noon.setDate(noon.getDate() + 1);
    }
  
    const timeUntilReset = noon - now;
  
    // 특정 시간까지 대기한 후 초기화
    setTimeout(() => {
      resetChecks();
      resetAtNoon(); // 다음 날 정오에 다시 초기화
    }, timeUntilReset);
  }
  
  // 초기화 함수 호출
  resetAtNoon();
  