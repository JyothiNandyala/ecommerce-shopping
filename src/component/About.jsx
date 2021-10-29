import React from 'react';

const About = () => {
  return (
    <>
      <div className='container'>
        <div>
          <img
            className='img-fluid'
            src='https://assets.pandaily.com/uploads/2020/06/online-shopping-apps.jpg'
            alt='aboutImage'
          />
        </div>

        <h2 className='text-center mt-3 text-success'>What Is Shopping ?</h2>
        <div class='d-flex align-items-center'>
          <div class='flex-shrink-0'>
            <img
              className='rounded'
              src='https://www.globalblue.com/business/images/article926851.ece/BINARY/TFS_Article_2019_970x643.jpg'
              alt='shoppingImage'
              width='400'
              height='206'
            />
          </div>
          <div class='flex-grow-1 ms-5 h5'>
            A shopping cart is a piece of software that keeps the record of the
            items a buyer has 'picked up' from the online store. A shopping cart
            on an online retailer's site is a piece of software that facilitates
            the purchase of a product or service. It accepts the customer's
            payment and organizes the distribution of that information to the
            merchant, payment processor and other parties.
          </div>
        </div>
        <div>
          <h2 className='text-center mt-3 text-success'>
            Importance Of Shopping !
          </h2>
        </div>
        <div class='d-flex align-items-center'>
          <div class='flex-shrink-0'>
            <img
              className='rounded'
              src='https://i.ytimg.com/vi/ad-GuV6YIMI/maxresdefault.jpg'
              alt='shoppingImage'
              width='400'
              height='236'
            />
          </div>
          <div class='flex-grow-1 ms-5 h5'>
            Shopping carts act as the bridge between shopping online and
            purchasing. The importance of a shopping cart in an online store is
            not even a debatable topic. There are never-ending reasons for it.
            The ease of use in the online shopping facilities act as a
            double-headed sword; with easy processes, the customers can quickly
            purchase products as well as abandon them. Therefore it becomes
            essential to add a shopping cart to your online store to bridge the
            gap between shopping and purchasing.It will saves the customers time
            as well as energy.
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
