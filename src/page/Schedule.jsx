import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import PageSpacing from '../component/PageSpacing';
import PageTitle from '../component/PageTitle';

const Schedule = () => {
  const schedule = {
    nineOClock: [
      '基礎 Basic',
      '基礎 Basic',
      null,
      null,
      '基礎 Basic',
      '基礎 Basic',
    ],
    tenOClock: [
      '力道掌握',
      '和音基礎',
      '歌曲分析',
      '和音基礎',
      '力道掌握',
      '宅錄技巧',
    ],
    elevenOClock: [
      '歌曲分析',
      '舞台音響',
      '力道掌握',
      '歌曲分析',
      null,
      '力道掌握',
    ],
    fourteenOClock: [
      '宅錄技巧',
      '基礎 Basic',
      '宅錄技巧',
      '舞台音響',
      '宅錄技巧',
      '基礎 Basic',
    ],
    fifteenOClock: [
      '舞台音響',
      '舞台音響',
      '基礎 Basic',
      '基礎 Basic',
      '和音基礎',
      '樂團練唱',
    ],
    sixteenOClock: [
      '和音基礎',
      '宅錄技巧',
      '舞台音響',
      '樂團練唱',
      '力道掌握',
      '樂團練唱',
    ],
    seventeenOClock: [
      '力道掌握',
      null,
      '和音基礎',
      '力道掌握',
      '歌曲分析',
      '和音基礎',
    ],
    twentyOClock: [
      '力道掌握',
      null,
      '樂團練唱',
      '力道掌握',
      '樂團練唱',
      '宅錄技巧',
    ],
  };
  const notices = [
    '空中瑜珈、香氛開放 2 天前電話預約上課。',
    '如果有特殊體質、特殊狀況，請主動告知該堂教師。',
    '取消預約或時間異動請於預約日前一天晚間 21:00 前告知。',
    '運動過程中若感到任何不適，請馬上停止且與老師商量討論。',
  ]
  return (
    <PageSpacing>
      <div className='container mb-8 mb-md-10 mb-lg-8'>
        <PageTitle>本月課表</PageTitle>
        <div className='row'>
          <div className=' offset-lg-1 col-lg-10 bg-secondary rounded text-white p-5 table-responsive'>
            <table className='table bg-white text-primary text-center'>
              <caption className='text-white caption-top'>2021 07 月</caption>
              {/* 對縱向產生群組 */}
              <colgroup>
                <col className='border-end border' />
                <col />
                <col span='1' className='bg-secondary-light' />
                <col />
                <col span='1' className='bg-secondary-light text' />
                <col />
                <col span='1' className='bg-secondary-light' />
              </colgroup>
              <thead>
                <tr>
                  <th scope='col' className='text-start'>
                    時間
                  </th>
                  <th scope='col'>星期一</th>
                  <th scope='col'>星期二</th>
                  <th scope='col'>星期三</th>
                  <th scope='col'>星期四</th>
                  <th scope='col'>星期五</th>
                  <th scope='col'>星期六</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row' className='text-start'>
                    0900-1000
                  </th>
                  {schedule.nineOClock.map((lesson) => (
                    <td key={uuidv4()}>{lesson}</td>
                  ))}
                </tr>
                <tr>
                  <th scope='row' className='text-start'>
                    1000-1100
                  </th>
                  {schedule.tenOClock.map((lesson) => (
                    <td key={uuidv4()}>{lesson}</td>
                  ))}
                </tr>
                <tr>
                  <th scope='row' className='text-start'>
                    1100-1200
                  </th>
                  {schedule.elevenOClock.map((lesson) => (
                    <td key={uuidv4()}>{lesson}</td>
                  ))}
                </tr>
                <tr>
                  <th scope='row' className='text-start'>
                    1200-1400
                  </th>
                  <td colSpan='6'>休息</td>
                </tr>
                <tr>
                  <th scope='row' className='text-start'>
                    1400-1500
                  </th>
                  {schedule.fourteenOClock.map((lesson) => (
                    <td key={uuidv4()}>{lesson}</td>
                  ))}
                </tr>
                <tr>
                  <th scope='row' className='text-start'>
                    1500-1600
                  </th>
                  {schedule.fifteenOClock.map((lesson) => (
                    <td key={uuidv4()}>{lesson}</td>
                  ))}
                </tr>
                <tr>
                  <th scope='row' className='text-start'>
                    1600-1700
                  </th>
                  {schedule.sixteenOClock.map((lesson) => (
                    <td key={uuidv4()}>{lesson}</td>
                  ))}
                </tr>
                <tr>
                  <th scope='row' className='text-start'>
                    1700-1800
                  </th>
                  {schedule.seventeenOClock.map((lesson) => (
                    <td key={uuidv4()}>{lesson}</td>
                  ))}
                </tr>
                <tr>
                  <th scope='row' className='text-start'>
                    1800-2000
                  </th>
                  <td colSpan='6'>休息</td>
                </tr>
                <tr>
                  <th scope='row' className='text-start'>
                    2000-2100
                  </th>
                  {schedule.twentyOClock.map((lesson) => (
                    <td key={uuidv4()}>{lesson}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <section className='container'>
        <PageTitle>上課須知</PageTitle>
        <ol className='row align-self-center gy-4 gy-md-6 list-unstyled'>
          {
            notices.map((notice, index) => 
              <li className={`col-md-10 col-lg-7 offset-lg-${index % 2 != 0 ? 3 : 2} d-flex`} key={uuidv4()}>
              <span className='text-primary fw-bold fs-8 me-2 me-md-6'>{index + 1}.</span>
              <p className={`${index % 2 != 0 ? 'bg-secondary text-white' : 'text-primary'} border rounded p-4 w-100`}>{notice}</p>
            </li>
              )
          }

        </ol>
      </section>
    </PageSpacing>
  );
};

export default Schedule;
