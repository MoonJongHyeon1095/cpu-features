"use strict";

let binding;
try {
  binding = require("../build/Release/cpufeatures.node");
} catch (e) {
  console.warn("cpu-features.node 로드 실패, 기본 설정 사용");
  // 기본값 또는 오류 처리 로직 추가
  binding = {}; // 빈 객체를 할당하여 오류 방지
}

module.exports =
  binding.getCPUInfo ||
  function () {
    console.warn("getCPUInfo가 로드되지 않았습니다.");
    return {}; // 기본값 반환
  };
