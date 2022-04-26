import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './component/Nav';
import '../src/style/all.css';
import Footer from './component/Footer';
import Homepage from './page/homepage/Homepage';
import Schedule from './page/Schedule';
import Space from './page/Space';
import Course from './page/Course';
import ReservationPage from './page/reservationPage/ReservationPage';
import Contact from './page/Contact';

import '../node_modules/bootstrap/dist/js/bootstrap.esm';
import Form from './page/reservationPage/Form';
import Result from './page/reservationPage/Result';
import ReservationSelection from './page/reservationPage/ReservationSelection';

import carolTangImg from './img/teacher-1.png';
import kanaeImg from './img/teacher-2.png';
import kuzuhaImg from './img/teacher-4.png';
import asaChenImg from './img/teacher-3.png';
import livingRoomImg from './img/sittin people beside table inside room.jpg';

const App = () => {
  const lessons = [
    {
      name: '基礎 Basic',
      teacher: 'Carol Tang',
      info: '從基礎打底，訓練氣息穩定度，重視呼吸與肌肉掌控，用最小的力道唱出集中的音色',
      level: 'basic',
      img: 'https://images.unsplash.com/photo-1522863602463-afebb8886ab2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      time: 60,
    },
    {
      name: '力道掌握',
      teacher: 'Kanae',
      info: '分析每個學員歌唱時的習慣，藉由歌唱科學理論講解每個狀態與現象，提供學員客製的訓練菜單',
      level: 'intermediate',
      img: 'https://images.unsplash.com/photo-1465409042654-5314e9d1754b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      time: 60,
    },
    {
      name: '和音基礎',
      teacher: 'Kanae',
      info: '帶入基礎樂理，小班制編制，多名學員一起從實戰中理解和音，配合精準的練習，你也可以成為和音小天使！',
      level: 'advanced',
      img: 'https://images.unsplash.com/photo-1593827992027-f02b16183bab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
      time: 60,
    },
    {
      name: '歌曲分析',
      teacher: 'Kuzuha、Kanae',
      info: '學員提供想唱的歌曲，老師分析其中所需的歌唱技巧，配合一對一的訓練，打造你想要的卡啦 ok 歌單',
      img: 'https://images.unsplash.com/photo-1608319917470-9d9179430f8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      time: 60,
    },
    {
      name: '舞台音響',
      teacher: 'Kuzuha',
      info: '理解舞台音響設備，模擬實際狀況，加深現場演出的理解',
      level: 'intermediate',
      img: 'https://images.unsplash.com/photo-1629327896333-7ecec1515ae5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      time: 60,
    },
    {
      name: '宅錄技巧',
      teacher: 'Kuzuha',
      info: '宅錄趨勢不可擋，錄音已經不是僅限於錄音室裡的事，在家人人都可以打造自己的簡易錄音間！課程帶學員認識基本設備，對數位音樂陌生的學員也可以自行架設，不走冤枉路',
      level: 'intermediate',
      img: 'https://images.unsplash.com/photo-1567596388756-f6d710c8fc07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      time: 60,
    },

    {
      name: '基礎混音後製',
      teacher: 'Asa Chen',
      info: '想讓自己的作品更完整，混音絕對可以讓作品升級到另一個層次，講師不藏私的技術分享，與專業術語的深度剖析，讓你的作品更加閃亮！',
      level: 'advanced',
      img: 'https://images.unsplash.com/photo-1563330232-57114bb0823c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      time: 60,
    },
    {
      name: '樂團練唱',
      teacher: 'Asa Chen',
      info: '（注意：本課程需要以樂團為單位報名）提供專業 Session 演奏空間、錄音設備，不定期聘請線上專業製作人指點，增加樂團編曲、演唱可能性',
      img: 'https://images.unsplash.com/photo-1604513843888-824303218a45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      time: 60,
    },
    {
      name: '商業音樂',
      monthFeature: true,
      teacher: 'Asa Chen',
      info: '聘請專業音樂人，解析現下流行趨勢，商業音樂製作考量，以及製作流程大公開！',
      img: 'https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      time: 60,
    },
  ];
  const teachers = [
    {
      name: 'Carol Tang',
      img: carolTangImg,
      teachingYears: 10,
      info: '“歌唱實力來自於基礎的奠定，基礎打好後就可以擁有無限的發揮潛能。”',
      exp: [
        '協會認證歌唱理論老師',
        '2010 年完成四年的葛萊美音樂培訓',
        '2020 取得聲樂高階認證',
      ],
    },
    {
      name: 'Kanae',
      img: kanaeImg,
      teachingYears: 3,
      info: '“觀察歌唱時的身體狀態，精準分析學員的習慣，提供系統性訓練菜單”',
      exp: [
        '美國音樂學院師資認證',
        '英國倫敦科學歌唱學會研習',

      ],
    },
    {
      name: 'Kuzuha',
      img: kuzuhaImg,
      teachingYears: 3,
      info: '“觀察歌唱時的身體狀態，精準分析學員的習慣，提供系統性訓練菜單”',
      exp: [
        '美國音樂學院師資認證',
        '英國倫敦科學歌唱學會研習',

      ],
    },
    {
      name: 'Asa Chen',
      img: asaChenImg,
      teachingYears: 3,
      info: '“觀察歌唱時的身體狀態，精準分析學員的習慣，提供系統性訓練菜單”',
      exp: [
        '美國音樂學院師資認證',
        '英國倫敦科學歌唱學會研習',

      ],
    },
  ];
  const termsInfo = [
    {
      name: '首次體驗',
      engName: 'trial',
      price: 450,
      info: '分基礎、中級、高級可以選擇。初次至 UTAOU 上課建議選擇此方案。',
      img: 'https://images.unsplash.com/photo-1593827992027-f02b16183bab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    },
    {
      name: '短期體驗',
      engName: 'short',
      price: 1800,
      info: '分基礎、中級、高級可以選擇。想要培養紮實基礎與裡論理解的學員建議選擇此方案。',
      img: 'https://images.unsplash.com/photo-1522863602463-afebb8886ab2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      name: '長期體驗',
      engName: 'long',
      price: 5600,
      info: '分基礎、中級、高級可以選擇。想要更多一對一訓練、客製化菜單的學員建議選擇此方案。',
      img: 'https://images.unsplash.com/photo-1608319917470-9d9179430f8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
  ];
  const socialMediaLinks = [
    {
      name: 'facebook',
    },
    {
      name: 'instagram',
    },
    {
      name: 'line',
    },
  ];

  const spaces = [
    {
      name: 'A、B 團體課教室',
      img: 'https://images.unsplash.com/photo-1604513843888-824303218a45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      des: '教授課程：基礎、樂團訓練、力道掌握、和音基礎',
    },
    {
      name: 'C、D 理論講授空間',
      img: 'https://images.unsplash.com/photo-1607831876417-1b498ff5c7ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVsYXglMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      des: '開放時間：每週一至週五 09:00~17:00',
    },
    {
      name: '一對一訓練空間',
      img: 'https://images.unsplash.com/photo-1583396796390-6da043f2ba3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80',
      des: '開放時間：每週一至週日 09:00~21:30',
    },
    {
      name: '器材出租',
      img: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      des: '有租借需求請至櫃檯登記',
    },
    {
      name: '交誼廳',
      img: livingRoomImg,
      des: '開放時間：每週一至週五 09:00~21:30',
    },
  ];
  const levelsInfo = [
    {
      level: '基礎 Basic',
      lessons: '基礎課程',
      time: 60,
      listInfos: [
        '基礎氣息掌握與訓練',
        '穩定度與音色掌握',
        '適合任何階段練習者',
      ],
    },
    {
      level: '中階 Intermediate',
      lessons: '和音訓練、宅錄技巧、舞台音響',
      time: 60,
      listInfos: [
        '更實戰的技巧',
        '理解數位音樂',
        '適合半年以上練習者',
      ],
    },
    {
      level: '高階 Advanced',
      lessons: '基礎混音後製、樂團練唱、商業音樂',
      time: 60,
      listInfos: [
        '豐富作品完整性',
        '理解大眾、商業考量',
        '適合一年以上練習者',
      ],
    },
  ];

  const [level, setLevel] = useState(null);
  const [term, setTerm] = useState(null);
  const [step, setStep] = useState('1');
  return (
    <>
      <header className='sticky-top'>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route
            path='/UTAOU'
            element={
              <Homepage
                termsInfo={termsInfo}
                setTerm={setTerm}
                teachers={teachers}
                lessons={lessons}
                spaces={spaces}
              />
            }
          />

          <Route
            path='/UTAOU/space'
            element={<Space lessons={lessons} spaces={spaces} />}
          />

          <Route path='/UTAOU/schedule' element={<Schedule />} />
          <Route
            path='/UTAOU/course'
            element={<Course lessons={lessons} teachers={teachers} />}
          />

          <Route
            path='/UTAOU/reservation'
            element={
              <ReservationPage
                termsInfo={termsInfo}
                setTerm={setTerm}
                term={term}
                step={step}
              />
            }
          >
            <Route
              path='selection'
              element={
                <ReservationSelection
                  termsInfo={termsInfo}
                  setTerm={setTerm}
                  term={term}
                  // step={step}
                  setStep={setStep}
                  levelsInfo={levelsInfo}
                  level={level}
                  setLevel={setLevel}
                />
              }
            />
            <Route
              path='form'
              element={<Form setStep={setStep} term={term} level={level} />}
            />
            <Route path='result' element={<Result setStep={setStep} />} />
          </Route>
          <Route
            path='/UTAOU/contact'
            element={<Contact setStep={setStep} />}
          />
        </Routes>
      </main>
      <Footer socialMediaLinks={socialMediaLinks} />
    </>
  );
};

export default App;
