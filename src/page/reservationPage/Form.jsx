import React from 'react';
// import Datepicker from '../../../node_modules/vanillajs-datepicker/js/Datepicker';
// import { Datepicker } from 'vanillajs-datepicker';
import { Link } from 'react-router-dom';
import ThePlanUserPick from './ThePlanUserPick';
import FormQuestion from './FormQuestion';
import FormClickInput from './FormClickInput';
import { v4 as uuidv4 } from 'uuid';
import FormFillInput from './FormFillInput';

const Form = ({ setStep, level, term }) => {
  // const elem = document.querySelector('input[name="foo"]');
  // const datepicker = new Datepicker(elem, {
  //   // ...options
  // });
  const formQuestions = [
    {
      question: '1. 是否接觸過歌唱技巧?',
      name: 'isExperienced',
      type: 'radio',
      answers: [
        { InputValue: '是', id: 'isExperiencedYes' },
        { InputValue: '否', id: 'isExperiencedNo' },
      ],
    },
    {
      question: '2. 想改善的歌唱問題?',
      name: 'problems',
      type: 'checkbox',
      answers: [
        { InputValue: '氣不足', id: 'lackOfBreath' },
        { InputValue: '唱歌很緊繃', id: 'easyToBeTired' },
        { InputValue: '喉嚨痛', id: 'soreThroat' },
        { InputValue: '姿勢不正', id: 'poorPosture' },
        { InputValue: '高音上不去', id: 'cantSingHighNotes' },
        { InputValue: '唱不久', id: 'cantSingToLong' },
      ],
    },
    {
      question: '3. 每週歌唱訓練量約為多少？',
      name: 'quantityOfExercise',
      type: 'radio',
      answers: [
        { InputValue: '150 分鐘以上', id: 'above150Min' },
        { InputValue: '75~150 分鐘', id: 'from75To150Min' },
        { InputValue: '30~75 分鐘', id: 'from30To75Min' },
        { InputValue: '30 分鐘以下', id: 'below30Min' },
      ],
    },
    {
      question: '4. 上課預約報到日',
      name: 'reportForDuty',

      fillIns: [{ nameAndIdAndFor: 'registerDate', type: 'date' }],
      text: '若還沒有確定的日期，可以等待專員與您聯絡時在做詳細的諮詢哦！',
    },
    {
      question: '5. 填寫基本資料，完成預約後會寄送通知至電子信箱',
      fillIns: [
        {
          label: '姓名',
          type: 'text',
          nameAndIdAndFor: 'registerName',
          placeholder: '請輸入您的姓名',
        },
        { label: '年齡', type: 'number', nameAndIdAndFor: 'registerAge' },
        {
          label: '性別',
          nameAndIdAndFor: 'registerGender',
          type: 'select',
          options: ['女', '男', '保留'],
        },
        { label: '電子信箱', nameAndIdAndFor: 'registerEmail', type: 'email' },
        { label: '手機號碼', nameAndIdAndFor: 'registerPhone' },
      ],
    },
  ];

  return (
    <div className='container'>
      <ThePlanUserPick term={term} level={level} />
      <div className='row'>
        <form className='mx-auto col-md-6 col-lg-4 text-primary-dark'>
          {/* <input type='text' name='foo' /> */}
          {formQuestions.map((formQuestion) => (
            <FormQuestion
              question={formQuestion.question}
              text={formQuestion.text}
              key={uuidv4()}
            >
              {formQuestion.answers
                ? formQuestion.answers.map((answer) => (
                    <FormClickInput
                      idAndFor={answer.id}
                      type={formQuestion.type}
                      name={formQuestion.name}
                      key={answer.id}
                    >
                      {answer.InputValue}
                    </FormClickInput>
                  ))
                : formQuestion.fillIns
                ? formQuestion.fillIns.map((fillIn) => (
                    <FormFillInput
                      type={fillIn.type}
                      nameAndIdAndFor={fillIn.nameAndIdAndFor}
                      placeholder={`請輸入您的${fillIn.label}`}
                      key={fillIn.nameAndIdAndFor}
                      label={fillIn.label}
                      options={fillIn.type == 'select' ? fillIn.options : null}
                    />
                  ))
                : ''}
            </FormQuestion>
          ))}
          

          <Link to='/UTAOU/reservation/result'>
            <input
              type='submit'
              className='btn btn-secondary w-100'
              value='送出'
              onClick={() => {
                setStep(3);
              }}
            />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Form;
