import React from "react";
import PageSpacing from '../component/PageSpacing';
import PageTitle from '../component/PageTitle';

const Contact = () => {
  return (
    <PageSpacing>
      <div className="container">
        <PageTitle>聯絡我們</PageTitle>
        <div className="row">
          <div className="col-md-10 offset-1 col-lg-7 offset-lg-0 mb-10 mb-lg-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58924.83338881918!2d120.28268582261876!3d22.623864631309715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e049783205c61%3A0xebaf934b04f62525!2zODAy6auY6ZuE5biC6IuT6ZuF5Y2A!5e0!3m2!1szh-TW!2stw!4v1646119895255!5m2!1szh-TW!2stw"
              allowFullScreen=""
              loading="lazy"
              className="map-length w-100 mb-6 rounded"
            ></iframe>
            <section className="text-primary">
              <h3 className="fs-6 fw-normal mb-2">UTAOU 教室位置</h3>
              <h4 className="fs-4 fw-normal mb-2 mb-md-8 mb-lg-2">高雄市苓雅區北信街 23 號 2 樓</h4>
              <h4 className="fs-4 fw-normal">如何前往：</h4>
              <ol className="ps-4">
                <li className="mb-6">
                  搭乘捷運：紅線到正義站 3
                  號出口，延正義路<br/>方向至北信街交叉口即可。
                </li>
                <li className="mb-6">
                  搭乘公車：搭這些公車都可以抵達正義站<br/> 24B 25 33 50 76 77 77區 100
                </li>
                <li>開車前往北信街 32 號，教室旁有<br/>專屬停車場可以使用。</li>
              </ol>
            </section>
          </div>
          <div className="col-md-10 offset-1 col-lg-5 offset-lg-0">
            <form className="bg-secondary-light text-primary rounded d-flex flex-column p-8">
              <h3 className="fs-5 mb-4 mb-md-6 fw-normal">意見回饋&問題詢問</h3>
              <label htmlFor="name" className="form-label">
                姓名
                <input
                  type="text"
                  className="form-control mt-2"
                  id="name"
                  placeholder="請輸入您的姓名"
                />
              </label>
              <label htmlFor="email" className="form-label">
                電子信箱
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="email@example.com"
                />
              </label>
              <label htmlFor="phone" className="form-label">
                手機號碼
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="0912-345-678"
                />
              </label>
              <label htmlFor="feedback" className="form-label">
                意見回饋
                <textarea
                  type="text"
                  className="form-control"
                  id="feedback"
                  rows="9"
                />
              </label>
              <input type="submit" value="送出" className="btn btn-primary ms-auto"/>
            </form>
          </div>
        </div>
      </div>
    </PageSpacing>
  );
};

export default Contact;
