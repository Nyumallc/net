btn = document.getElementById("submit-btn");
btn.setAttribute('onclick', 'pushButton1()');
function pushButton1() {
    let name = document.getElementById("user-name");
    let displayname = name.innerHTML;
    let user_id = document.getElementById("user_id");
    let userid = user_id.innerHTML;
    let url = document.getElementById("url");
    let urltext = url.value;
    let item = document.getElementById("item");
    let itemext = item.value;
    let yen = document.getElementById("yen");
    let yentext = yen.value;    
    let option= document.getElementById("option");
    let optiontext= option.value;
    
    let resurl=(`${REQUEST_URL}?&userid=${userid}&displayname=${displayname}&url=${urltext}&item=${itemext}&yen=${yentext}&option=${optiontext}`)

         alert(resurl);
        const res = fetch(resurl);
        console.log(res);
        liff.sendMessages([{
            'type': 'text',
            'text': urltext + "の注文をリクエストしました。"
          }]).then(function() {
            // document.getElementById('log').value += 'sendMessagesText completed\n';
          }).catch(function(error) {
            // document.getElementById('log').value += 'sendMessagesText()=' + error + '\n';
          });
    };


function pushButton2() {
    let user_id = document.getElementById("user_id");
    let userid = user_id.innerHTML;
    location.href=(`https://share.streamlit.io/nyumallc/streamlit_db/main/streamlit_db.py?f_num=net&userid=${userid}`)
     
    };
