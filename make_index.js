const fs = require('fs');
const path = require('path');

// 디렉터리 경로
const audioDirectory = './assets/audio';
const textDirectory = './assets/text';

// HTML 템플릿
const template = `
<!DOCTYPE html>
<html>
<head>
  <title>Style Control VALL-E Demo</title>
  <style>
    table {
      border-collapse: collapse;
      width: 100%;
    }

    th, td {
      border: 1px solid black;
      padding: 8px;
      text-align: left;
    }
  </style>
</head>
<body>
  <h1>Style Control VALL-E Demo</h1>
  <table>
    <tr>
      <th>Speaker ID</th>
      <th>Sentence</th>
      <th>Reference Audio</th>
      <th>Style Control VALL-E (proposed)</th>
      <th>VALL-E (base)</th>
      <th>GST Tacotron2</th>
      <th>VAE Tacotron2</th>
    </tr>
    {{rows}}
  </table>
</body>
</html>
`;

// speaker id 목록 가져오기
function getSpeakerIds(directoryPath) {
  const files = fs.readdirSync(directoryPath);
  return files.map(file => path.basename(file, path.extname(file)))
}

// 파일 읽기
function readFile(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    console.error(`Error reading file: ${filePath}`);
    return 'Error loading file.';
  }
}

// 테이블 행 생성
function createRow(speakerId) {
  const audioFiles = getAudioFiles(speakerId);
  const textFile = path.join(textDirectory, `${speakerId}.txt`);

  const row = `
    <tr>
    <td>${speakerId}</td>
    <td><p>${readFile(textFile)}</p></td>
      ${audioFiles.map(audioFile => `<td><audio controls src="${audioFile}"></audio></td>`).join('')}
    </tr>
  `;

  return row;
}

// 오디오 파일 경로 가져오기
function getAudioFiles(speakerId) {
  const modelDirectories = fs.readdirSync(audioDirectory);
  return modelDirectories.map(modelDirectory => path.join(audioDirectory, modelDirectory, `${speakerId}.wav`));
}

// index.html 생성
function createIndexHtml() {
  const speakerIds = getSpeakerIds(textDirectory)
  speakerIds.sort((a, b) => {

    return parseInt(a.replace('speaker', '')) - parseInt(b.replace('speaker', ''))
  });
  const rows = speakerIds.map(speakerId => createRow(speakerId)).join('');
  const html = template.replace('{{rows}}', rows);
  fs.writeFileSync('index.html', html);
  console.log('index.html created successfully.');
}

// index.html 생성 함수 호출
createIndexHtml();
