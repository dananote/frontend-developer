class VendingMachineEvent {
    constructor() {
        const vMachine = document.querySelector('.section1');
        this.balance = vMachine.querySelector('.bg-box p');
        this.itemList = vMachine.querySelector('.cola-list');
        this.btnsColar = vMachine.querySelectorAll('.btn-cola');
        this.inputCostEl = vMachine.querySelector('#input-money');
        this.btnPut = vMachine.querySelector('#input-money+.btn');
        this.btnReturn = vMachine.querySelector('.bg-box+.btn');
        this.btnGet = vMachine.querySelector('.btn-get');
        this.stagedList = vMachine.querySelector('.get-list');


        const myinfo = document.querySelector('.section2');
        this.myMoney = myinfo.querySelector('.bg-box strong');

        const getInfo = document.querySelector('.section3');
        this.getList = getInfo.querySelector('.get-list');
        this.txtTotal = getInfo.querySelector('.total-price');
    }

    // 장바구니 콜라 생성 함수
    stagedItemGenerator(target) {
        const stagedItem = document.createElement('li');

        stagedItem.innerHTML = `
        <img src="./img/${target.dataset.img}" alt="">
            ${target.dataset.item}
        <strong>1
            <span class="a11y-hidden">개</span>
        </strong>
        `;
        this.stagedList.append(stagedItem);
    }


    bindEvent() {
    //todo 1. 입금 버튼 기능
    // 입급 버튼을 누르면
    // 1-1 쇼지금 === 소지금 - 입금액
    // 1-2 잔액 === 기존 잔액 + 입금액
    // 1-3 입금액이 소지금보다 많으면 경고장 출력
    // 1-4 같은 제품이 들어올때 카운트 올라가기
    // 1-5 입금액이 정산적으로 입금되면 입금창은 초기화
    this.btnPut.addEventListener('click', () => {
        const inputCost = parseInt(this.inputCostEl.value); // 입력값
        const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(',' , "")); // 소지금
        const balanceVal = parseInt(this.balance.textContent.replaceAll(',' , "")); // 잔액

        if(inputCost){ // 한번 거르기 소지금이 있는지
            if(inputCost <= myMoneyVal && inputCost > 0){ // 입금액이 소지금 보다 적거나 같고 0보다 크고
                this.myMoney.textContent = new Intl.NumberFormat().format(myMoneyVal - inputCost)  + '원';

                this.balance.textContent = new Intl.NumberFormat().format((balanceVal ? balanceVal : 0) + inputCost) + '원';

            } else { // 입금액이 소지금 보다 많다
                alert('소지금이 부족합니다.')
            }

            this.inputCostEl.value = null; // 입금액 초기화
        }
    });


     //todo 2. 거스름돈 반환
    // 반환 버튼을 누르면
    // 2-1 쇼지금 === 소지금 + 잔액
    // 1-2 잔액창 초기화
    this.btnReturn.addEventListener('click', () => {
        const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(',' , "")); // 소지금
        const balanceVal = parseInt(this.balance.textContent.replaceAll(',' , "")); // 잔액
        
        if(balanceVal) {
            this.myMoney.textContent = new Intl.NumberFormat().format(balanceVal + myMoneyVal)  + '원';
            this.balance.textContent = null; // 입금액 초기화
        }

    })


    //todo 3. 자판기 장바구니 채우기
    // 반환 버튼을 누르면
    // 3-1 잔액 === 잔액 - 음료가격
    // 3-2 잔액이 없으면 경고창
    // 3-3 음료가 장바구니에 들어감
    // 3-4 음료의 count - 1
    // 3-5 음료의 count 가 0이 되면 품절 표시
    this.btnsCola = document.querySelectorAll('.section1 .btn-cola');

    this.btnsCola.forEach((item) => {
        item.addEventListener('click', (event) => {
            const balanceVal = parseInt(this.balance.textContent.replaceAll(',', ''));
            const targetElPrice = parseInt(event.currentTarget.dataset.price);


            if (balanceVal >= targetElPrice) {
                this.balance.textContent = new Intl.NumberFormat().format(balanceVal - targetElPrice) + '원';

                //장바구니 콜라 생성
                this.stagedItemGenerator(event.currentTarget);
                for(const item of this.stagedList) {

                }

            } else {
                alert('입금한 금액이 부족합니다.');
            }
        })
    })
   
}

};

export default VendingMachineEvent;