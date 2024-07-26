import { createStore } from "redux";

const initialState = {
  product1: [
    {
      id: 1,
      img1: "https://s3-alpha-sig.figma.com/img/b84f/b146/85f70ab60cc651b5a41f901cd77bd49f?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UnEK94WAk4utD2JgBI6lv50B9bfY5bSCu4ejXL8r3CuK731kDmGGIuEeVILi754JVfniJ3TA0O7TzAWBkmVezGZ8X67CIns95Hyx94aBUC0lVW26CMeNAwu~6rX0y8gavFX1I1y359p0qGL4oOSauxYM6tuypD-lA0noC2lasZLTY3Vabpcmatql5obGHwvDbIWx1LhYE-AE74oQG-cM7PAtVsv8Upo3FMEPD0Xg0WpWf-wIYxWXVjJQrX5BfrKYd5kwXCnvAU9Gs9U9IB8mFzk8ujD6wMOcHl6oN1sinnmymdo1-uWI2qjnAZ7NLtipCoV2uHmOh3Fhfi26CL~tIQ__",
      img2: "https://s3-alpha-sig.figma.com/img/4c70/dabb/32afd44852f096a50bda7b5a615a5530?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g6bPEYuTz3ARe0gr1Xpk7NGUw9CkddRE49K0s4c9mHukhX6~nvUPsfsJztJazab4DPIqb8Pm3dey8pVENN2~jPmABRdjbg0JgUZI5KTgW4-Ph5XsBlqbDAHrCog7WBvVUwIlCyOPApMfWakdKQwJbMEOPLnCr3VygF9~fXdT23Y8kaYtnorAjRBQEF9bZu6-Z6vk6W98-RXriRqfU2pu84Nur10ngJanPxR-qQG4tImOdaSDB03B~u2UJeS5u-SedgjDqVWoCh0ibzBas0xg93StRpXvuyZlwmQEiBpF-hnjV7mViSztnGCi0xfjekNDffguVjYK1Ey5fh1wc4cUSg__",
      title: 'Complete LED Whitening Kit',
      price: '$80',
      name:'Whitening'
    }
  ],
  product2: [
    {
      id: 2,
      img1: "https://s3-alpha-sig.figma.com/img/34b3/bf00/b30604ee175ae6d8efe02474693071b4?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=djxzcGefprhj294EJy0bsUnI-sfrNe8dw9NolI~iDCdcMNbvPL6HNJ-NFYg3ASfAd9VSKEMmWjeObHfNRH2ZkuC5WjSsuo1ZZwiKJFclgmjbIzaq1frCIBe8y7JmgjswSCt097p8ny6rPzQQ8wzCZfZRyBGecJtnMSKd13yvw10EXm5VZpPegHzBCSl7XeP7MyL7j~wVQWQ8aaqsCtQL8K748dxnL372QkECJnMJZsgERnmo3OjKJp5PMTfZ7ysdsXT3ibzXdDxtZitXXt9pufxNQDgnI6ozoCjLlU6WR-uW-dKD~4fgp7U9VMCyPendf2L-G7RkicOpxPerb-vt1g__",
      img2: "https://s3-alpha-sig.figma.com/img/55e8/47d5/9af3209fad3200f5511f012b10ae4be3?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J01Q~PdB61tORoPHvXFC-BrhgznAtGHDAFKxHrSGbFqM536EksbC3Vy60S5OFrbtK~vvm6hs1PvPJH3SpdMTWAJweW5x~S--f~8wD3ltf-qfYimm1NqeyMyx7B2GXH9g5R~4XBATJpTdBCRNCFtSyy9MxzR3A~kPbR1QgBuRQfhjyeOu3UGdnlWXVBIT2zn9id5ZMKu0aqbO0M~A12jnqOtSDnuFchTpyez9T4ga2Turvg4XRuatAcm96TRoe4YLtP978uucyOHfT68xzolh7pMpRReOq6aFFFK7rDVM4bBShdvrCqKTtXcPSEHJl9NqWfG9QAatang46b66O4RNFg__",
      title: 'Whitening Gel',
      price: '$45',
      name:'Refills & Accessories'
    }
  ],
  product3: [
    {
      id: 3,
      img1: "https://m.media-amazon.com/images/I/61q0yCcDcwL._US500_.jpg",
      img2: "https://m.media-amazon.com/images/I/71oLRHfbDDL._AC_UF350,350_QL80_.jpg",
      title: 'Whitening Kit',
      price: '$60',
      name:'Whitening Kit'
    }
  ],
  basket: []  
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      let productToAdd;
      if (action.payload.id === 1) {
        productToAdd = state.product1[0];
      } else if (action.payload.id === 2) {
        productToAdd = state.product2[0];
      } else if (action.payload.id === 3) {
        productToAdd = state.product3[0];
      }
      return {
        ...state,
        basket: [
          ...state.basket,
          productToAdd
        ]
      };
    case 'DELETE_FROM_CART':
        const updatedBasket = state.basket.filter(item => item.id !== action.payload);
        return {
          ...state,
          basket: updatedBasket
        };  

    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
