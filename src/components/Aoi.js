import React from 'react';
import styles from './Aoi.module.css'
import AoiCard from './AoiCard';

const cardData=[{icon:<svg width="34" height="29" viewBox="0 0 34 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.14 28.8332H9.62C4.67 28.8332 0 24.0232 0 18.9332C0.0110203 16.6365 0.812291 14.4136 2.26915 12.638C3.72601 10.8625 5.74966 9.64251 8 9.18319C8.25886 6.57612 9.51191 4.16891 11.499 2.46143C13.486 0.753958 16.0544 -0.122581 18.6707 0.0138344C21.2871 0.15025 23.7503 1.28914 25.549 3.194C27.3478 5.09886 28.3437 7.62333 28.33 10.2432C28.3053 11.0032 28.1946 11.7581 28 12.4932C29.7346 12.9917 31.2592 14.0428 32.3421 15.4866C33.425 16.9305 34.0071 18.6884 34 20.4932C34 24.9332 30.33 28.8332 26.14 28.8332ZM18.09 2.06319C15.9542 2.07525 13.9066 2.91611 12.3787 4.40853C10.8509 5.90094 9.96217 7.92829 9.9 10.0632V10.9332L9.04 11.0332C7.10068 11.2544 5.3108 12.1823 4.01219 13.6395C2.71359 15.0968 1.99725 16.9813 2 18.9332C2 22.9332 5.77 26.8332 9.62 26.8332H26.14C29.21 26.8332 32 23.8332 32 20.4832C32.0049 18.9691 31.4652 17.5036 30.4793 16.3544C29.4935 15.2052 28.1273 14.4487 26.63 14.2232L25.45 14.0432L25.84 12.9132C26.266 11.6796 26.3906 10.3619 26.2035 9.07034C26.0164 7.77873 25.5229 6.55064 24.7644 5.48864C24.0058 4.42665 23.0041 3.56157 21.843 2.96566C20.6819 2.36975 19.3951 2.06032 18.09 2.06319V2.06319Z" fill="white"/></svg>
, head:"Cloud Compute", desc:"I utilize AWS to develop and productionize machine learning systems."},
{icon:<svg width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 32H5L6.2 30.4C7 29.3 7.5 27.9 7.8 26.2C2.8 23.9 0 19.6 0 14C0 5.4 6.5 0 17 0C27.5 0 34 5.4 34 14C34 22.8 27.6 28 17 28H16.3C14.7 29.9 11.9 32 7 32ZM17 2C7.6 2 2 6.5 2 14C2 20.4 5.9 23.4 9.2 24.7L9.9 25L9.8 25.8C9.6 27.4 9.3 28.8 8.7 30C12 29.6 13.9 27.9 15 26.5L15.3 26.1H17C30.5 26.1 32 17.7 32 14.1C32 6.5 26.4 2 17 2Z" fill="white"/>
</svg>
, head:"NPL", desc:"I apply text analytics to some of the hardest questions in business."},
{icon:<svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25 22C24.5545 22.002 24.1153 22.1046 23.715 22.3L19.415 18H16V20H18.586L22.301 23.715C22.1054 24.1153 22.0026 24.5545 22 25C22 25.5933 22.1759 26.1734 22.5056 26.6667C22.8352 27.1601 23.3038 27.5446 23.8519 27.7716C24.4001 27.9987 25.0033 28.0581 25.5853 27.9424C26.1672 27.8266 26.7018 27.5409 27.1213 27.1213C27.5409 26.7018 27.8266 26.1672 27.9424 25.5853C28.0581 25.0033 27.9987 24.4001 27.7716 23.8519C27.5446 23.3038 27.1601 22.8352 26.6667 22.5056C26.1734 22.1759 25.5933 22 25 22ZM25 26C24.8022 26 24.6089 25.9414 24.4444 25.8315C24.28 25.7216 24.1518 25.5654 24.0761 25.3827C24.0004 25.2 23.9806 24.9989 24.0192 24.8049C24.0578 24.6109 24.153 24.4327 24.2929 24.2929C24.4327 24.153 24.6109 24.0578 24.8049 24.0192C24.9989 23.9806 25.2 24.0004 25.3827 24.0761C25.5654 24.1518 25.7216 24.28 25.8315 24.4444C25.9414 24.6089 26 24.8022 26 25C26 25.2652 25.8946 25.5196 25.7071 25.7071C25.5196 25.8946 25.2652 26 25 26Z" fill="white"/>
<path d="M25 11C24.3816 11.0018 23.7789 11.1951 23.2747 11.5532C22.7704 11.9113 22.3895 12.4167 22.184 13H16V15H22.184C22.3682 15.5172 22.6911 15.9738 23.1172 16.3199C23.5434 16.666 24.0565 16.8883 24.6005 16.9625C25.1444 17.0367 25.6983 16.96 26.2016 16.7407C26.7049 16.5214 27.1383 16.168 27.4543 15.7191C27.7704 15.2702 27.9569 14.743 27.9936 14.1952C28.0304 13.6475 27.9158 13.1001 27.6625 12.6131C27.4091 12.126 27.0268 11.7179 26.5573 11.4334C26.0877 11.149 25.549 10.999 25 11ZM25 15C24.8022 15 24.6089 14.9414 24.4444 14.8315C24.28 14.7216 24.1518 14.5654 24.0761 14.3827C24.0004 14.2 23.9806 13.9989 24.0192 13.8049C24.0578 13.6109 24.153 13.4328 24.2929 13.2929C24.4327 13.153 24.6109 13.0578 24.8049 13.0192C24.9989 12.9806 25.2 13.0004 25.3827 13.0761C25.5654 13.1518 25.7216 13.28 25.8315 13.4444C25.9414 13.6089 26 13.8022 26 14C26 14.2652 25.8946 14.5196 25.7071 14.7071C25.5196 14.8946 25.2652 15 25 15Z" fill="white"/>
<path d="M25 1.25779e-06C24.2046 0.000795473 23.442 0.317121 22.8796 0.879558C22.3171 1.442 22.0008 2.2046 22 3C22.0034 3.47906 22.1228 3.95016 22.348 4.373L18.596 8H16V10H19.404L23.804 5.748C24.2127 5.92624 24.6561 6.01108 25.1017 5.99637C25.5474 5.98165 25.9841 5.86774 26.3802 5.66293C26.7763 5.45813 27.1217 5.16757 27.3914 4.81243C27.661 4.45728 27.848 4.04648 27.9389 3.60992C28.0297 3.17337 28.022 2.72206 27.9165 2.28884C27.8109 1.85562 27.61 1.4514 27.3285 1.1056C27.047 0.759805 26.6919 0.481134 26.2891 0.289878C25.8863 0.0986215 25.4459 -0.000407095 25 1.25779e-06ZM25 4C24.8022 4 24.6089 3.94135 24.4444 3.83147C24.28 3.72159 24.1518 3.56541 24.0761 3.38268C24.0004 3.19996 23.9806 2.99889 24.0192 2.80491C24.0578 2.61093 24.153 2.43275 24.2929 2.29289C24.4327 2.15304 24.6109 2.0578 24.8049 2.01922C24.9989 1.98063 25.2 2.00043 25.3827 2.07612C25.5654 2.15181 25.7216 2.27998 25.8315 2.44443C25.9414 2.60888 26 2.80222 26 3C26 3.26522 25.8946 3.51957 25.7071 3.70711C25.5196 3.89464 25.2652 4 25 4Z" fill="white"/>
<path d="M16 4H18V2H16C15.4301 2.0019 14.8673 2.12629 14.3497 2.36473C13.8321 2.60318 13.3718 2.9501 13 3.382C12.6282 2.9501 12.1679 2.60318 11.6503 2.36473C11.1327 2.12629 10.5699 2.0019 10 2H9C6.61386 2.00265 4.32622 2.95171 2.63896 4.63896C0.951708 6.32622 0.00264685 8.61386 0 11V17C0.00264685 19.3861 0.951708 21.6738 2.63896 23.361C4.32622 25.0483 6.61386 25.9974 9 26H10C10.5699 25.9981 11.1327 25.8737 11.6503 25.6353C12.1679 25.3968 12.6282 25.0499 13 24.618C13.3718 25.0499 13.8321 25.3968 14.3497 25.6353C14.8673 25.8737 15.4301 25.9981 16 26H18V24H16C15.4697 23.9995 14.9613 23.7886 14.5864 23.4136C14.2114 23.0387 14.0005 22.5303 14 22V6C14.0005 5.46973 14.2114 4.96133 14.5864 4.58637C14.9613 4.21141 15.4697 4.00053 16 4V4ZM10 24H9C7.31844 23.997 5.69408 23.3892 4.42358 22.2876C3.15309 21.186 2.32125 19.6642 2.08 18H4V16H2V12H5C5.79541 11.9992 6.55801 11.6829 7.12044 11.1204C7.68288 10.558 7.99921 9.79541 8 9V7H6V9C6 9.26522 5.89464 9.51957 5.70711 9.70711C5.51957 9.89464 5.26522 10 5 10H2.08C2.32125 8.33583 3.15309 6.81398 4.42358 5.7124C5.69408 4.61081 7.31844 4.00301 9 4H10C10.5303 4.00053 11.0387 4.21141 11.4136 4.58637C11.7886 4.96133 11.9995 5.46973 12 6V10H10V12H12V16H10C9.20459 16.0008 8.44199 16.3171 7.87956 16.8796C7.31712 17.442 7.00079 18.2046 7 19V21H9V19C9 18.7348 9.10536 18.4804 9.29289 18.2929C9.48043 18.1054 9.73478 18 10 18H12V22C11.9995 22.5303 11.7886 23.0387 11.4136 23.4136C11.0387 23.7886 10.5303 23.9995 10 24V24Z" fill="white"/>
</svg>
, head:"Machine Learning", desc:"I am passionate about learning the theory that is pushing the cutting edge of ML."},
{icon:<svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 6.01265L15.5 11.15L30 6.01265L15.5 1L1 6.01265Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
<path d="M1 11.875L15.5 16.95L30 11.875" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1 17.675L15.5 22.75L30 17.675" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1 23.475L15.5 28.55L30 23.475" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>, head:"Parallel Computing", desc:"Hive, Hadoop, and Spark, Oh my !"},
{icon:<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.3782 24.2511C28.3457 23.2178 27.1393 22.3745 25.8142 21.7597C27.6828 20.2459 28.8749 17.9359 28.8749 15.3455C28.8749 10.7752 25.0634 7.02564 20.493 7.09576C15.9926 7.16588 12.3668 10.8329 12.3668 15.3455C12.3668 17.9359 13.563 20.2459 15.4275 21.7597C14.1022 22.374 12.8957 23.2174 11.8635 24.2511C9.61129 26.5074 8.33255 29.4856 8.25005 32.6618C8.24895 32.7058 8.25667 32.7496 8.27276 32.7906C8.28885 32.8316 8.31299 32.8689 8.34374 32.9005C8.37449 32.932 8.41125 32.957 8.45183 32.9741C8.49241 32.9912 8.53601 33 8.58005 33H10.89C11.0674 33 11.2159 32.8598 11.22 32.6824C11.2984 30.29 12.2678 28.0501 13.9714 26.3507C14.8432 25.4743 15.8801 24.7795 17.0222 24.3066C18.1643 23.8336 19.3888 23.5918 20.625 23.5953C23.1371 23.5953 25.5007 24.5729 27.2786 26.3507C28.978 28.0501 29.9474 30.29 30.0299 32.6824C30.034 32.8598 30.1825 33 30.3599 33H32.6699C32.7139 33 32.7575 32.9912 32.7981 32.9741C32.8387 32.957 32.8755 32.932 32.9062 32.9005C32.937 32.8689 32.9611 32.8316 32.9772 32.7906C32.9933 32.7496 33.001 32.7058 32.9999 32.6618C32.9174 29.4856 31.6387 26.5074 29.3782 24.2511ZM20.625 20.6254C19.2142 20.6254 17.886 20.0768 16.8919 19.0785C16.393 18.5836 15.9989 17.9932 15.7331 17.3426C15.4673 16.692 15.3354 15.9946 15.345 15.2919C15.3574 13.9389 15.8978 12.6313 16.8424 11.662C17.8324 10.6473 19.1565 10.0822 20.5714 10.0657C21.9697 10.0533 23.3268 10.5978 24.3251 11.5754C25.3481 12.5777 25.9091 13.9183 25.9091 15.3455C25.9091 16.7562 25.3604 18.0803 24.3622 19.0785C23.8725 19.5706 23.29 19.9607 22.6485 20.2262C22.007 20.4917 21.3192 20.6274 20.625 20.6254ZM10.2919 16.4345C10.2548 16.0756 10.2342 15.7126 10.2342 15.3455C10.2342 14.6897 10.296 14.0503 10.4115 13.4274C10.4404 13.279 10.362 13.1263 10.2259 13.0645C9.66492 12.8128 9.1493 12.4664 8.7038 12.0291C8.17885 11.5201 7.76577 10.9073 7.49091 10.2298C7.21605 9.55223 7.08545 8.82482 7.10743 8.09398C7.14456 6.7699 7.67668 5.51181 8.6048 4.56308C9.62367 3.51949 10.9932 2.95026 12.4493 2.96676C13.7651 2.97913 15.0356 3.48649 15.9968 4.38571C16.3226 4.69096 16.6031 5.0292 16.8382 5.39218C16.9207 5.52006 17.0816 5.57368 17.2219 5.52418C17.9479 5.27256 18.7151 5.09519 19.503 5.0127C19.734 4.98795 19.866 4.74045 19.7629 4.53421C18.4222 1.88191 15.6833 0.0504664 12.5153 0.000967851C7.94068 -0.0691551 4.1292 3.68036 4.1292 8.2466C4.1292 10.837 5.32132 13.147 7.18993 14.6608C5.87819 15.2671 4.66957 16.1045 3.62183 17.1522C1.36134 19.4085 0.0826026 22.3867 0.000103149 25.567C-0.000997827 25.611 0.00672424 25.6548 0.0228145 25.6958C0.0389049 25.7368 0.0630378 25.7741 0.0937912 25.8057C0.124545 25.8372 0.161297 25.8622 0.201881 25.8793C0.242466 25.8964 0.286062 25.9052 0.330101 25.9052H2.64421C2.82159 25.9052 2.97008 25.765 2.97421 25.5876C3.05258 23.1952 4.02195 20.9554 5.72557 19.2559C6.93831 18.0432 8.4233 17.2017 10.0444 16.7934C10.2053 16.7521 10.3125 16.5995 10.2919 16.4345Z" fill="white"/>
</svg>
, head:"Collaboration", desc:"I enjoy working with my team to create winning strategies."},
{icon:<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.71429 0C3.46398 0 2.26488 0.496682 1.38078 1.38078C0.496682 2.26488 0 3.46398 0 4.71429V28.2857C0 29.536 0.496682 30.7351 1.38078 31.6192C2.26488 32.5033 3.46398 33 4.71429 33C5.96459 33 7.16369 32.5033 8.04779 31.6192C8.93189 30.7351 9.42857 29.536 9.42857 28.2857V4.71429C9.42857 3.46398 8.93189 2.26488 8.04779 1.38078C7.16369 0.496682 5.96459 0 4.71429 0ZM2.35714 4.71429C2.35714 4.08913 2.60548 3.48958 3.04753 3.04753C3.48958 2.60548 4.08913 2.35714 4.71429 2.35714C5.33944 2.35714 5.93899 2.60548 6.38104 3.04753C6.82309 3.48958 7.07143 4.08913 7.07143 4.71429V28.2857C7.07143 28.9109 6.82309 29.5104 6.38104 29.9525C5.93899 30.3945 5.33944 30.6429 4.71429 30.6429C4.08913 30.6429 3.48958 30.3945 3.04753 29.9525C2.60548 29.5104 2.35714 28.9109 2.35714 28.2857V4.71429Z" fill="white"/>
<path d="M11.7857 11.7857C11.7857 10.5354 12.2824 9.33629 13.1665 8.45219C14.0506 7.56809 15.2497 7.07141 16.5 7.07141C17.7503 7.07141 18.9494 7.56809 19.8335 8.45219C20.7176 9.33629 21.2143 10.5354 21.2143 11.7857V28.2857C21.2143 29.536 20.7176 30.7351 19.8335 31.6192C18.9494 32.5033 17.7503 33 16.5 33C15.2497 33 14.0506 32.5033 13.1665 31.6192C12.2824 30.7351 11.7857 29.536 11.7857 28.2857V11.7857ZM16.5 9.42855C15.8748 9.42855 15.2753 9.6769 14.8332 10.1189C14.3912 10.561 14.1428 11.1605 14.1428 11.7857V28.2857C14.1428 28.9109 14.3912 29.5104 14.8332 29.9524C15.2753 30.3945 15.8748 30.6428 16.5 30.6428C17.1251 30.6428 17.7247 30.3945 18.1667 29.9524C18.6088 29.5104 18.8571 28.9109 18.8571 28.2857V11.7857C18.8571 11.1605 18.6088 10.561 18.1667 10.1189C17.7247 9.6769 17.1251 9.42855 16.5 9.42855Z" fill="white"/>
<path d="M23.5714 18.8571C23.5714 17.6068 24.0681 16.4077 24.9522 15.5236C25.8363 14.6395 27.0354 14.1428 28.2857 14.1428C29.536 14.1428 30.7351 14.6395 31.6192 15.5236C32.5033 16.4077 33 17.6068 33 18.8571V28.2857C33 29.536 32.5033 30.7351 31.6192 31.6192C30.7351 32.5033 29.536 33 28.2857 33C27.0354 33 25.8363 32.5033 24.9522 31.6192C24.0681 30.7351 23.5714 29.536 23.5714 28.2857V18.8571ZM28.2857 16.5C27.6606 16.5 27.061 16.7483 26.619 17.1904C26.1769 17.6324 25.9286 18.232 25.9286 18.8571V28.2857C25.9286 28.9108 26.1769 29.5104 26.619 29.9524C27.061 30.3945 27.6606 30.6428 28.2857 30.6428C28.9109 30.6428 29.5104 30.3945 29.9525 29.9524C30.3945 29.5104 30.6429 28.9108 30.6429 28.2857V18.8571C30.6429 18.232 30.3945 17.6324 29.9525 17.1904C29.5104 16.7483 28.9109 16.5 28.2857 16.5Z" fill="white"/>
</svg>
, head:"Data Analytics", desc:"I love telling a story. Getting to the heart of a problem and coming up with a solution."},
]

const Aoi=()=>{
    
    return(
        <div className={styles.container}>
            <div className={styles.heading}>Area of Interest
                <div className={styles.subheading}>Area of Interest</div>
            </div>
            <div className={styles.row}>
                {cardData.map((data)=>{
                    return(
                        <AoiCard icon={data.icon} head={data.head} desc={data.desc}></AoiCard>
                    )
                })}
            </div>
            
            
        </div>
    )
}

export default Aoi;
