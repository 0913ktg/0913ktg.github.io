# Style Control VALL-E Demo
- enhuiz의 non-official VALL-E source code를 사용해 한국어 공개 데이터를 사용하여 학습한 모델의 추론 결과
- https://github.com/enhuiz/vall-e
- 기본 VALL-E와 Style token을 추가한 Style Control VALL-E 두 모델을 학습
  
## 학습 데이터
- 명령어 음성(일반남여) : https://aihub.or.kr/aihubdata/data/view.do?currMenu=115&topMenu=100&aihubDataSe=realm&dataSetSn=96
- 명령어 음성(소아,유아) : https://aihub.or.kr/aihubdata/data/view.do?currMenu=115&topMenu=100&aihubDataSe=realm&dataSetSn=95
- 명령어 음성(노인남여) : https://aihub.or.kr/aihubdata/data/view.do?currMenu=115&topMenu=100&aihubDataSe=realm&dataSetSn=94
- 자유대화 음성(일반남여) : https://aihub.or.kr/aihubdata/data/view.do?currMenu=115&topMenu=100&aihubDataSe=realm&dataSetSn=107
- 자유대화 음성(소아,유아) : https://aihub.or.kr/aihubdata/data/view.do?currMenu=115&topMenu=100&aihubDataSe=realm&dataSetSn=109
- 자유대화 음성(노인남여) : https://aihub.or.kr/aihubdata/data/view.do?currMenu=115&topMenu=100&aihubDataSe=realm&dataSetSn=108
- 감성 및 발화 스타일별 음성합성 데이터 : https://aihub.or.kr/aihubdata/data/view.do?currMenu=115&topMenu=100&aihubDataSe=realm&dataSetSn=466
- 한국인 외래어 발음 : https://aihub.or.kr/aihubdata/data/view.do?currMenu=115&topMenu=100&aihubDataSe=realm&dataSetSn=131
- 한국어 음성 : https://aihub.or.kr/aihubdata/data/view.do?currMenu=115&topMenu=100&aihubDataSe=realm&dataSetSn=123

## 데이터 전처리
- 재생되지 않는 음성 파일 제거
- 라벨이 없는 음성 파일 제거
- 음성 파일이 없는 라벨 제거
- 라벨의 전사 텍스트에 한글을 제외한 문자(숫자, 영어, 일본어, 한자 등)이 있는 음성 파일과 라벨 제거
- ffmpeg를 이용하여 sampling rate 24,000Hz로 변환
