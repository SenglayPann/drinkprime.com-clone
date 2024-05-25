class Navbar extends HTMLElement {
    constructor() {
        super()
    };

    connectedCallback() {
        this.setAttribute('id', 'navbar-container');
        this.setAttribute('class', 'relative w-screen flex tab:flex-col tab:items-center des:flex-row des:border-b tab:hover:bg-white hover:text-black text-white  transition-colors ease-in-out duration-[450ms]');
        this.innerHTML = `
                <!-- main navbar -->
                <div id="main-navbar" class="flex items-center justify-between px-[23px] des:px-0 tab:pr-[20px] border-b tab:border-none tab:order-2 w-full des:w-[calc(50%_+_55px)] des:justify-normal tab:py-[11px] tab:px-[7px] des:pr-[76px]">

                    <div id="hamburger-button" class="right-icon cursor-pointer fill-white w-[26px] tab:hidden relative">
                        <svg id="hamburger-icon" class=" transition-none" role="presentation" viewBox="0 0 20 14"> <path d="M0 14v-1h20v1H0zm0-7.5h20v1H0v-1zM0 0h20v1H0V0z"></path></svg>
                        <div id="side-bar-closing-button" class="absolute top-0 w-full opacity-0 z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g><path class=" fill-black" d="M52.83,50,96.41,6.41a2,2,0,0,0-2.82-2.82L50,47.17,6.41,3.59A2,2,0,0,0,3.59,6.41L47.17,50,3.59,93.59a2,2,0,1,0,2.82,2.82L50,52.83,93.59,96.41a2,2,0,0,0,2.82-2.82Z"></path></g></svg>
                        </div>

                        <div id="side-bar" class="fixed flex flex-col overflow-y-scroll top-[50px] left-0 left-[calc(-100%)] w-[340px] h-[calc(100%_-_50px)] text-black bg-white cursor-default p-3">
                            <div class="grow-[1] pb-[142px]">
                                <div class="  items-center gap-1 font-normalidadWide text-[12px] text-black mt-5 mb-10 text-stroke-lg tracking-[.17em]">
                                    <a href="#">SHIP TO</a>
                                    <a href="#" id="us" class="border border-black px-3 py-2">US</a>
                                    <a href="#" id="uk" class=" border-black/0 border hover:border-black/100 transition-[border-opacity] px-3 py-2">UK</a>
                                </div>
            
                                <!-- shop -->
                                <div class="side-bar-acc border-b-[.1em] border-b-slate-300">
                                    <div class=" acc-section text-[13px]  text-stroke-lg pb-[13px] tracking-widest leading-relaxed font-normalidadWide flex justify-between items-center">
                                        <div>SHOP</div>
                                        <span class="acc-arrow w-[40px] h-[40px] flex items-center justify-center">
                                            <svg width="12" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <line x1="9.70711" y1="1.29289" x2="19.6066" y2="11.1924" stroke="black" stroke-width="2"/>
                                                <path d="M10.8995 1.00013L1.00003 10.8996" stroke="black" stroke-width="2"/>
                                                </svg>                                    
                                        </span>
                                    </div>
                                    
                                    <div class=" list grid hidden grid-cols-1  text-stroke-sm text-[14px] tracking-wider">
                                        <div class="grid grid-cols-2 grid-rows-none">
                                            <ul class="side-bar-ul p-[20px] leading-4">
                                                <!-- first list -->
                                                <a href="./hydration.html" >
                                                    <li class="text-[15px] text-stroke-md mb-[14px] tracking-widest leading-relaxed font-normalidadWide">HYDRATION</li>
                                                </a>
                                                <a href="./hydration.html">
                                                    <li>View All</li>
                                                </a>
                                                <a href="./hydration-subpage.html">
                                                    <li>Strawberry Banana</li>
                                                </a>
                                                <a href="./hydration-subpage.html">
                                                    <li>Cherry Freeze</li>
                                                </a>
                                                <a href="./hydration-subpage.html">
                                                    <li>Meta Moon</li>
                                                </a>
                                                <a href="./hydration-subpage.html">
                                                    <li>Lemonade</li>
                                                </a>
                                                <a href="./hydration-subpage.html">
                                                    <li>Strawberry Watermelon</li>
                                                </a>
                                                <a href="./hydration-subpage.html">
                                                    <li>Ice Pop</li>
                                                </a>
                                                <a href="./hydration-subpage.html">
                                                    <li>Trophcal punch</li>
                                                </a>
                                                <a href="./hydration-subpage.html">
                                                    <li>Lemon Lime</li>
                                                </a>
                                            </ul>
            
                                            <ul class="side-bar-ul p-[20px] leading-4">
                                                <!-- second list -->
                                                <a href="./hydration-sticks.html" >
                                                    <li class="text-[15px] text-stroke-md mb-[14px] tracking-widest leading-relaxed font-normalidadWide">HYDRATION+ STICKS</li>
                                                </a>
                                                <a href="./hydration-sticks.html">
                                                    <li>View All</li>
                                                </a>
                                                <a href="./hydration-sticks-subpage.html">
                                                    <li>Strawberry Banana</li>
                                                </a>
                                                <a href="./hydration-sticks-subpage.html">
                                                    <li>Cherry Freeze</li>
                                                </a>
                                                <a href="./hydration-sticks-subpage.html">
                                                    <li>Meta Moon</li>
                                                </a>
                                                <a href="./hydration-sticks-subpage.html">
                                                    <li>Lemonade</li>
                                                </a>
                                                <a href="./hydration-sticks-subpage.html">
                                                    <li>Strawberry Watermelon</li>
                                                </a>
                                                <a href="./hydration-sticks-subpage.html">
                                                    <li>Ice Pop</li>
                                                </a>
                                                <a href="./hydration-sticks-subpage.html">
                                                    <li>Trophcal punch</li>
                                                </a>
                                                <a href="./hydration-sticks-subpage.html">
                                                    <li>Lemon Lime</li>
                                                </a>
                                            </ul>
            
                                            <ul class="side-bar-ul p-[20px] leading-4">
                                                <a href="./energy.html" >
                                                    <li class="text-[15px] text-stroke-md mb-[14px] tracking-widest leading-relaxed font-normalidadWide">ENERGY</li>
                                                </a>
                                                <a href="./energy.html">
                                                    <li>View All</li>
                                                </a>
                                                <a href="./energy-subpage.html">
                                                    <li>Original</li>
                                                </a>
                                                <a href="./energy-subpage.html">
                                                    <li>Ice Pop</li>
                                                </a>
                                                <a href="./energy-subpage.html">
                                                    <li>Lemone Lime</li>
                                                </a>
                                                <a href="./energy-subpage.html">
                                                    <li>Tropical Punch</li>
                                                </a>
                                                <a href="./energy-subpage.html">
                                                    <li>Blue Rasbery</li>
                                                </a>
                                                <a href="./energy-subpage.html">
                                                    <li>Strawberry watermelon</li>
                                                </a>
                                                <a href="./energy-subpage.html">
                                                    <li>Orange Mango</li>
                                                </a>
                                            </ul>
                                        </div>
            
                                        <div>
                                            <div class="p-[20px]">
                                                <a href="./hydration-subpage.html">
                                                    <img src="../assets/nav-drop-list/SB_Extended_Nav_Banner_Bundle_400x.png" alt="">
                                                </a>
                                                <div class="text-center mt-2">STRAWBERRY BANANA HYDRATION</div>
                                            </div>
            
                                            <div class="p-[20px]">
                                                <a href="./hydration-sticks-subpageaaaaww">
                                                    <img src="../assets/nav-drop-list/SB_Extended_Nav_Banner_Sticks_400x.png" alt="">
                                                </a>
                                                <div class="text-center mt-2">STRAWBERRY BANANA HYDRATION+ STICKS</div>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
            
                                <!-- about prime -->
                                <div class="side-bar-acc border-b-[.1em] border-b-slate-300 mt-4">
                                    <div class=" acc-section text-[13px] text-stroke-lg pb-[13px] tracking-widest leading-relaxed font-normalidadWide flex justify-between items-center">
                                        <div>ABOUT PRIME</div>
                                        <span class="acc-arrow w-[40px] h-[40px] flex items-center justify-center">
                                            <svg width="12" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <line x1="9.70711" y1="1.29289" x2="19.6066" y2="11.1924" stroke="black" stroke-width="2"/>
                                                <path d="M10.8995 1.00013L1.00003 10.8996" stroke="black" stroke-width="2"/>
                                            </svg>                                    
                                        </span>
                                    </div>
            
                                    <div class=" list grid hidden grid-cols-1  text-stroke-sm text-[14px] tracking-wider">
                                        <div class="grid pb-10">
                                            <ul class="side-bar-ul px-[20px] leading-6">
            
                                                <li class=" pr-[40px] pb-[8px] pt-[8px] des:pb-0 w-[200px]">
                                                    <a href="./athlete.html">TEAM+ ATHLETE</a>
                                                </li>
                                                <li class=" pr-[40px] pb-[8px] pt-[8px] des:pb-0 w-[200px]">
                                                    <a href="./creator.html">CREATOR</a>
                                                </li>
                                                <li class=" pr-[40px] pb-[8px] pt-[8px] des:pb-0 w-[200px]">
                                                    <a href="./artist.html">ARTIST</a>
                                                </li>
                                                <li class=" pr-[40px] pb-[8px] pt-[8px] des:pb-0 w-[200px]">
                                                    <a href="./ambassador.html">AMBASSADOR</a>
                                                </li>
                                            </ul>
            
                                        </div>
                                    </div>
                                </div>
            
                                <!-- where to buy -->
                                <div class="side-bar-acc border-b-[.1em] border-b-slate-300 mt-4">
                                    <a href="./where-to-buy.html" class=" acc-section text-[13px] h-[53px] text-stroke-lg pb-[13px] tracking-widest leading-relaxed font-normalidadWide flex justify-between items-center">
                                        <div>WHERE TO BUY</div>
                                    </a>
                                </div>
                                <!-- verify your prime -->
                                <div class="side-bar-acc border-b-[.1em] border-b-slate-300 mt-4">
                                    <a href="./verify-your-prime.html" class=" acc-section text-[13px] h-[53px] text-stroke-lg pb-[13px] tracking-widest leading-relaxed font-normalidadWide flex justify-between items-center">
                                        <div>VERIFY YOUR PRIME</div>
                                    </a>
                                </div>
            
                                <!-- Login -->
                                <div class="side-bar-ac mt-4 ">
                                    <a href="./login.html" class=" acc-section text-stroke-sm text-[13px] h-[53px]  pb-[13px] tracking-widest leading-relaxed font-normalidad flex justify-between items-center">
                                        <div>LOGIN</div>
                                    </a>
                                </div>
            
                            </div>

                            <!-- buttom social links -->
                            <div class="flex justify-evenly items-center pt-[20px] border-t border-t-slate-300">
                                <a href="https://www.facebook.com/Prime-Hydration-101364282422983" class="w-[14px]">
                                    <svg class="" width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="Homepage/Nav" stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="Homepage-Desktop" transform="translate(-80.000000, -3493.000000)" fill-rule="nonzero"> <g id="Footer" transform="translate(0.000000, 3230.000000)"> <g id="Facebook" transform="translate(80.000000, 263.000000)"> <path d="M14,7.04206901 C13.9996032,10.5072197 11.4951848,13.4576666 8.09392163,14 L8.09392163,9.07775195 L9.72561773,9.07775195 L10.0310095,7.04206901 L8.09171664,7.04206901 L8.09171664,5.72081649 C8.09171664,5.1661345 8.36293099,4.62032741 9.23280141,4.62032741 L10.1147993,4.62032741 L10.1147993,2.88306339 C9.59651159,2.80027655 9.07289572,2.75578306 8.54815055,2.74993971 C6.94952937,2.74993971 5.90215688,3.72507066 5.90215688,5.49006878 L5.90215688,7.04317838 L4.12713613,7.04317838 L4.12713613,9.07775195 L5.90436187,9.07775195 L5.90436187,14 C2.2270805,13.4134658 -0.350395985,10.0330078 0.0388464207,6.3071543 C0.428088827,2.5813008 3.64782071,-0.185951372 7.36593057,0.00976982248 C11.0840404,0.205491017 13.9992417,3.29568589 14,7.04206901 L14,7.04206901 Z" id="Path"></path></g></g></g></g></svg>
                                </a>
                                <a href="https://www.instagram.com/drinkprime/" class="w-[14px]">
                                    <svg class="" width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="Homepage/Nav" stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="Homepage-Desktop" transform="translate(-80.000000, -3493.000000)" fill-rule="nonzero"> <g id="Footer" transform="translate(0.000000, 3230.000000)"> <g id="Facebook" transform="translate(80.000000, 263.000000)"> <path d="M14,7.04206901 C13.9996032,10.5072197 11.4951848,13.4576666 8.09392163,14 L8.09392163,9.07775195 L9.72561773,9.07775195 L10.0310095,7.04206901 L8.09171664,7.04206901 L8.09171664,5.72081649 C8.09171664,5.1661345 8.36293099,4.62032741 9.23280141,4.62032741 L10.1147993,4.62032741 L10.1147993,2.88306339 C9.59651159,2.80027655 9.07289572,2.75578306 8.54815055,2.74993971 C6.94952937,2.74993971 5.90215688,3.72507066 5.90215688,5.49006878 L5.90215688,7.04317838 L4.12713613,7.04317838 L4.12713613,9.07775195 L5.90436187,9.07775195 L5.90436187,14 C2.2270805,13.4134658 -0.350395985,10.0330078 0.0388464207,6.3071543 C0.428088827,2.5813008 3.64782071,-0.185951372 7.36593057,0.00976982248 C11.0840404,0.205491017 13.9992417,3.29568589 14,7.04206901 L14,7.04206901 Z" id="Path"></path></g></g></g></g></svg>
                                </a>
                                <a href="https://twitter.com/primehydrate" class="w-[14px]">
                                    <svg class="" role="presentation" viewBox="0 0 32 26"> <path d="M32 3.077c-1.1748.525-2.4433.8748-3.768 1.031 1.356-.8123 2.3932-2.0995 2.887-3.6305-1.2686.7498-2.6746 1.2997-4.168 1.5934C25.751.796 24.045.0025 22.158.0025c-3.6242 0-6.561 2.937-6.561 6.5612 0 .5124.0562 1.0123.1686 1.4935C10.3104 7.7822 5.474 5.1702 2.237 1.196c-.5624.9687-.8873 2.0997-.8873 3.2994 0 2.2746 1.156 4.2867 2.9182 5.4615-1.075-.0314-2.0872-.3313-2.9745-.8187v.0812c0 3.1806 2.262 5.8363 5.2677 6.4362-.55.15-1.131.2312-1.731.2312-.4248 0-.831-.0438-1.2372-.1188.8374 2.6057 3.262 4.5054 6.13 4.5616-2.2495 1.7622-5.074 2.812-8.1546 2.812-.531 0-1.0498-.0313-1.5684-.0938 2.912 1.8684 6.3613 2.9494 10.0668 2.9494 12.0726 0 18.6776-10.0043 18.6776-18.6776 0-.2874-.0063-.5686-.0188-.8498C30.0066 5.5514 31.119 4.3954 32 3.077z"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- coutry selection section -->
                    <div id="main-nav-left" class="order-1 tab:order-none hidden tab:flex tab:pl-[20px] des:pl-0  des:pr-[40px] items-center des:order-1 gap-1 font-normalidadWide text-[12px]  text-stroke-semibold tracking-[.17em]">
                        <a href="#">SHIP TO</a>
                        <a href="#" id="us" class="border border-white px-3 py-2">US</a>
                        <a href="#" id="uk" class=" border-black/0 border  hover:border-black/100 transition-[border-opacity] px-3 py-2">UK</a>
                    </div>

                    <!-- prime logo -->
                    <figure id="drinkprime-logo" class="ml-10 tab:ml-0 tab:grow-0 des:grow-[1] tab:w-[115px] py-[5px] tab:py-0">
                        <a href="../index.html" class="cursor-default"><img class=" cursor-pointer w-[90px] tab:w-[115px]" src="../assets/logo/Prime-Logo.png" alt="prime-logo"></a>
                    </figure>

                    <div id="main-nav-right" class=" order-2 flex items-center gap-6">

                        <!-- account icon-->
                        <a class="right-icon hidden tab:block cursor-pointer" href="./login.html">
                            <svg width="20px" height="21px" viewBox="0 0 20 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g transform="translate(-1278.000000, -68.000000)" fill-rule="nonzero"> <g transform="translate(0.000000, 42.000000)"> <g id="account" transform="translate(1278.000000, 26.000000)"> <polygon id="Path" fill="#000000" points="16.6285714 17.5261905 16.6285714 17.5261905 16.6261905 17.5261905"></polygon>
                                    <path class=" right-icon fill-white w-[20px]" d="M19.8809535,10.1785714 C19.8831145,5.62161598 16.7864899,1.64677886 12.3674382,0.534200985 C7.94838648,-0.578376891 3.33876326,1.45627002 1.18285062,5.47097901 C-0.973062025,9.485688 -0.123068307,14.4521681 3.2452381,17.5214286 L3.2452381,17.5214286 L3.28095238,17.552381 L3.28095238,17.552381 C7.06025697,20.9698251 12.8135526,20.9698251 16.5928571,17.552381 L16.5928571,17.552381 L16.6238095,17.5238095 C18.6920899,15.6408949 19.8739986,12.9755525 19.8809535,10.1785714 Z M8.80952381,11.7571429 L8.80952381,11.7571429 C9.09553807,11.6985776 9.30822276,11.4577292 9.33095238,11.1666667 L9.33095238,11.1142857 C9.32896945,10.8431305 9.16063876,10.601037 8.90714286,10.5047619 C7.78144778,10.0713048 7.03668465,8.99196534 7.03095238,7.78571429 C7.03183749,6.31622456 8.12917642,5.07846273 9.58797014,4.90148327 C11.0467639,4.72450382 12.4082413,5.66396441 12.7604832,7.09061311 C13.112725,8.51726181 12.3449559,9.98243678 10.9714286,10.5047619 L10.9714286,10.5047619 C10.7167516,10.6022197 10.5483129,10.8463611 10.547619,11.1190476 L10.547619,11.1714286 C10.5728836,11.4609284 10.7846558,11.6997765 11.0690476,11.7595238 L11.0690476,11.7595238 C13.4970995,12.2602238 15.3010174,14.3068647 15.4928571,16.7785714 C12.2865983,19.4867086 7.59435403,19.4867086 4.38809524,16.7785714 C4.57786618,14.3063384 6.38119213,12.2582961 8.80952381,11.7571429 Z M14.1571429,7.78809524 C14.1626958,5.8467386 12.8420381,4.15247062 10.9580481,3.68398574 C9.07405809,3.21550087 7.11366894,4.09388297 6.20930006,5.81173435 C5.30493119,7.52958574 5.69032438,9.64291317 7.14285714,10.9309524 C5.18219048,11.7965271 3.73921929,13.5293258 3.24285714,15.6142857 C0.349062277,12.0500211 0.754047381,6.84368037 4.16420448,3.76978063 C7.57436157,0.695880886 12.7946655,0.831612189 16.0404762,4.07857143 C19.1716554,7.20047301 19.428942,12.1866872 16.6357143,15.6142857 C16.1434141,13.5302849 14.7036202,11.7970692 12.7452381,10.9309524 C13.6387045,10.1298156 14.1516004,8.98812508 14.1571429,7.78809524 Z" id="Shape">
                                    </path>
                                </g></g></g></g>
                            </svg>
                        </a>

                        <!-- search btn-->
                        <div id="search-open-btn" class="right-icon cursor-pointer">
                            <svg  width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g transform="translate(-1324.000000, -68.000000)" fill="#FFFFFF" fill-rule="nonzero"> <g transform="translate(0.000000, 42.000000)"> <g id="search" transform="translate(1324.000000, 26.000000)"> 
                                    <path class="right-icon fill-white w-[20px]" d="M19.6964706,18.7811765 L19.6964706,18.7811765 L12.7505882,11.8352941 C15.1779771,8.91864329 14.8823982,4.60871793 12.0795556,2.05076139 C9.27671295,-0.507195143 4.95778918,-0.408600398 2.27459439,2.27459439 C-0.408600398,4.95778918 -0.507195143,9.27671295 2.05076139,12.0795556 C4.60871793,14.8823982 8.91864329,15.1779771 11.8352941,12.7505882 L18.7788235,19.6941176 L18.7788235,19.6941176 C19.0315146,19.9425603 19.4367207,19.9425603 19.6894118,19.6941176 L19.6894118,19.6941176 C19.9378544,19.4414266 19.9378544,19.0362205 19.6894118,18.7835294 L19.6964706,18.7811765 Z M7.31294118,13.0988273 C4.54862957,13.1019621 2.1672401,11.1515334 1.62568029,8.44078784 C1.08412048,5.73004229 2.53329677,3.01433313 5.08661925,1.95510096 C7.63994174,0.89586879 10.5859234,1.7882702 12.1222455,4.08634395 C13.6585675,6.3844177 13.3571317,9.44780219 11.4023529,11.4023529 C10.3192121,12.4893963 8.84749527,13.0999302 7.31294118,13.0988273 Z" id="Shape">
                                    </path>
                                </g></g></g></g>
                            </svg>
                        </div>

                        <!-- shop icon -->
                        <div class="right-icon cursor-pointer">
                            <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g transform="translate(-1370.000000, -68.000000)" fill="#FFFFFF" fill-rule="nonzero"> <g transform="translate(0.000000, 42.000000)"> <g id="cart" transform="translate(1370.000000, 26.000000)"> 
                                    <path class="right-icon fill-white w-[20px]" d="M19.7285714,6.47619048 L19.7285714,6.47619048 C19.6050006,6.32587318 19.4207793,6.2385645 19.2261905,6.23809524 L16.2833333,6.23809524 L16.2833333,1.58095238 C16.2820275,1.21987966 15.9896441,0.927496358 15.6285714,0.926190476 L13.2261905,0.926190476 C13.0032999,0.370964205 12.4673198,0.00518125147 11.8690476,0 L8.01428571,0 C7.41386905,0.00195029399 6.87486345,0.368511794 6.65238095,0.926190476 L4.2547619,0.926190476 C3.89314689,0.926190476 3.6,1.21933737 3.6,1.58095238 L3.6,6.24047619 L0.654761905,6.24047619 C0.459638086,6.24156072 0.27493431,6.32868514 0.15,6.47857143 L0.15,6.47857143 C0.0543283544,6.59465734 0.0013807556,6.74005313 0,6.89047619 C0.000420136499,6.93201055 0.00440299576,6.97343228 0.0119047619,7.01428571 L2.31666667,19.347619 L2.31666667,19.347619 C2.37311908,19.658205 2.64384945,19.8838137 2.95952381,19.8833341 L16.9238095,19.8833341 C17.2389354,19.8836252 17.5088791,19.6578359 17.5642857,19.347619 L17.5642857,19.347619 L19.8714286,7.01428571 L19.8714286,7.01428571 C19.8749569,6.97706756 19.8749569,6.93959911 19.8714286,6.90238095 C19.8770792,6.74769254 19.8263077,6.59622405 19.7285714,6.47619048 Z M6.66666667,2.23571429 C6.89220316,2.78953668 7.4282332,3.15377426 8.02619048,3.15952381 L11.8690476,3.15952381 C12.4669368,3.15538182 13.0030777,2.79042978 13.2261905,2.23571429 L14.9738095,2.23571429 L14.9738095,6.24047619 L4.90952381,6.24047619 L4.90952381,2.23571429 L6.66666667,2.23571429 Z M12.047619,1.68095238 C12.047361,1.72568759 12.0293813,1.76849655 11.997619,1.8 C11.966999,1.83162336 11.9249693,1.8496361 11.8809524,1.8500032 L8.01428571,1.8500032 C7.96944221,1.85027983 7.92643331,1.8322161 7.8952381,1.8 C7.86253867,1.76913741 7.84438237,1.72590813 7.84520916,1.68095238 L7.84520916,1.47857143 C7.84520916,1.38520901 7.92092329,1.30952381 8.01428571,1.30952381 L11.8690476,1.30952381 C11.9614789,1.31082579 12.0357235,1.38613098 12.0357143,1.47857143 L12.047619,1.68095238 Z M16.3785714,18.5714286 L3.50238095,18.5714286 L1.44285714,7.55 L18.4380952,7.55 L16.3785714,18.5714286 Z" id="Shape">
                                    </path>
                                </g></g></g></g>
                            </svg>
                        </div>
                    </div>
                </div>

                <!-- second navabar -->
                <div id="sec-navbar" class="grow-[1] hidden  font-normalidadWide tab:flex tab:order-3 des:order-1 tab:justify-center des:justify-normal des:border-none tab:border-b tab:w-full des:w-auto des:pl-[76px] gap-4 text-[12px] tracking-[.17em] text-stroke-semibold">
                    <!-- shop -->
                    <div class="sec-nav-ls py-[14px] des:py-[28px] relative">
                        <div href="#" class="cursor-pointer">SHOP</div>
                        <div class="animate-border w-0 h-[2px] bg-black absolute bottom-[-2px] z-10"></div>
                        <div class="hidden-ls shadow-lg flex justify-center w-screen fixed left-0 px-5 top-[119px] des:top-[74px] bg-white text-black ">
                            <div class="w-full max-w-[1450px] grid grid-cols-2">
                                <div class="shop-left-ls flex gap-5 justify-between text-[13px] text-stroke-sm tracking-wide">
                                    
                                    <ul class="pt-[20px] pr-[20px] pl-0 leading-4">

                                        <!-- first list -->
                                        <a href="./hydration.html" >
                                            <li class="text-[15px] text-stroke-md mb-[14px] font-normalidadWide">HYDRATION</li>
                                        </a>
                                        <a href="./hydration.html">
                                            <li class="mb-[19px]">View All</li>
                                        </a>
                                        <a href="./hydration-subpage.html">
                                            <li class="mb-[19px]">Strawberry Banana</li>
                                        </a>
                                        <a href="./hydration-subpage.html">
                                            <li class="mb-[19px]">Cherry Freeze</li>
                                        </a>
                                        <a href="./hydration-subpage.html">
                                            <li class="mb-[19px]">Meta Moon</li>
                                        </a>
                                        <a href="./hydration-subpage.html">
                                            <li class="mb-[19px]">Lemonade</li>
                                        </a>
                                        <a href="./hydration-subpage.html">
                                            <li class="mb-[19px]">Strawberry Watermelon</li>
                                        </a>
                                        <a href="./hydration-subpage.html">
                                            <li class="mb-[19px]">Ice Pop</li>
                                        </a>
                                        <a href="./hydration-subpage.html">
                                            <li class="mb-[19px]">Trophcal punch</li>
                                        </a>
                                        <a href="./hydration-subpage.html">
                                            <li class="mb-[19px]">Lemon Lime</li>
                                        </a>
                                    </ul>
            
                                    <!-- second list -->
                                    <ul class="p-[20px]  leading-4">
                                        <a href="./hydration-sticks.html" >
                                            <li class="text-[15px] text-stroke-md mb-[14px] font-normalidadWide">HYDRATION+ STICKS</li>
                                        </a>
                                        <a href="./hydration-sticks.html">
                                            <li class="mb-[19px]">View All</li>
                                        </a>
                                        <a href="./hydration-sticks-subpage.html">
                                            <li class="mb-[19px]">Strawberry Banana</li>
                                        </a>
                                        <a href="./hydration-sticks-subpage.html">
                                            <li class="mb-[19px]">Cherry Freeze</li>
                                        </a>
                                        <a href="./hydration-sticks-subpage.html">
                                            <li class="mb-[19px]">Meta Moon</li>
                                        </a>
                                        <a href="./hydration-sticks-subpage.html">
                                            <li class="mb-[19px]">Lemonade</li>
                                        </a>
                                        <a href="./hydration-sticks-subpage.html">
                                            <li class="mb-[19px]">Strawberry Watermelon</li>
                                        </a>
                                        <a href="./hydration-sticks-subpage.html">
                                            <li class="mb-[19px]">Ice Pop</li>
                                        </a>
                                        <a href="./hydration-sticks-subpage.html">
                                            <li class="mb-[19px]">Trophcal punch</li>
                                        </a>
                                        <a href="./hydration-sticks-subpage.html">
                                            <li class="mb-[19px]">Lemon Lime</li>
                                        </a>
                                    </ul>
            
                                    <!-- third list -->
                                    <ul class="p-[20px] leading-4">
                                        <a href="./energy.html" >
                                            <li class="text-[15px] text-stroke-md mb-[14px] font-normalidadWide">ENERGY</li>
                                        </a>
                                        <a href="./energy.html">
                                            <li class="mb-[19px]">View All</li>
                                        </a>
                                        <a href="./energy-subpage.html">
                                            <li class="mb-[19px]">Original</li>
                                        </a>
                                        <a href="./energy-subpage.html">
                                            <li class="mb-[19px]">Ice Pop</li>
                                        </a>
                                        <a href="./energy-subpage.html">
                                            <li class="mb-[19px]">Lemone Lime</li>
                                        </a>
                                        <a href="./energy-subpage.html">
                                            <li class="mb-[19px]">Tropical Punch</li>
                                        </a>
                                        <a href="./energy-subpage.html">
                                            <li class="mb-[19px]">Blue Rasbery</li>
                                        </a>
                                        <a href="./energy-subpage.html">
                                            <li class="mb-[19px]">Strawberry watermelon</li>
                                        </a>
                                        <a href="./energy-subpage.html">
                                            <li class="mb-[19px]">Orang Mango</li>
                                        </a>
                                    </ul>
                                </div>

                                <!-- product img -->
                                <div class="shop-right-ls grid grid-cols-2 text-stroke-md text-[15px]">
                                    <div class="p-[20px]">
                                        <a href="./hydration-subpage.html">
                                            <img src="../assets/nav-drop-list/SB_Extended_Nav_Banner_Bundle_400x.png" alt="">
                                        </a>
                                        <div class="text-center mt-2">STRAWBERRY BANANA HYDRATION</div>
                                    </div>

                                    <div class="p-[20px]">
                                        <a href="./hydration-sticks.html">
                                            <img src="../assets/nav-drop-list/SB_Extended_Nav_Banner_Sticks_400x.png" alt="">
                                        </a>
                                        <div class="text-center mt-2">STRAWBERRY BANANA HYDRATION+ STICKS</div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- about prime -->
                    <div class="sec-nav-ls py-[14px] des:py-[28px] relative">
                        <a class="sec-nav-ls  py-[14px] relative" href="#">ABOUT PRIME</a>
                        <ul class="hidden-ls shadow-lg absolute bottom-[calc(-340%_-_33px)] des:bottom-[-210%] z-20  font-normalidad text-[14px] bg-white text-black text-nowrap opacity-0 py-[20px] text-stroke-sm tracking-wide">
                            <div class="animate-border w-0 h-[2px] bg-black absolute top-0 "></div>
                            <li class="pl-[24px] pr-[40px] tab:pb-[8px] pt-[8px] des:pb-0 w-[200px]">
                                <a href="./athlete.html">Team+ Athlete</a>
                            </li>
                            <li class="pl-[24px] pr-[40px] tab:pb-[8px] pt-[8px] des:pb-0 w-[200px]">
                                <a href="./creator.html">Creators</a>
                            </li>
                            <li class="pl-[24px] pr-[40px] tab:pb-[8px] pt-[8px] des:pb-0 w-[200px]">
                                <a href="./artist.html">Artists</a>
                            </li>
                            <li class="pl-[24px] pr-[40px] tab:pb-[8px] pt-[8px] des:pb-0 w-[200px]">
                                <a href="./ambassador.html">Ambassador</a>
                            </li>
                        </ul>
                    </div>

                    <!-- where to buu -->
                    <div class="sec-nav-ls py-[14px] des:py-[28px] relative">
                        <a href="./where-to-buy.html">WHERE TO BUY</a>
                        <div class="animate-border w-0 h-[2px] bg-black absolute bottom-[-2px] "></div>
                    </div>

                    <!-- verify yoour prime -->
                    <div class="sec-nav-ls py-[14px] des:py-[28px] relative">
                        <a href="./verify-your-prime.html">VERIFY YOOUR PRIME</a>
                        <div class="animate-border w-0 h-[2px] bg-black absolute bottom-[-2px] "></div>
                    </div>
                </div>

                <!-- search bar -->

                <div id="search-bar" class="absolute -z-10 opacity-0 font-normalidadExteded bg-white w-full h-[74px] top-0 left-0 flex items-center">
                    <input id="search-input" class="w-full h-full grow-[1] text-[13px] text-stroke-md" type="text" placeholder="SEARCH...">
                    <div id="search-closing-btn" class="h-[75%] w-[20px] flex items-center mr-[30px]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g><path class=" fill-black" d="M52.83,50,96.41,6.41a2,2,0,0,0-2.82-2.82L50,47.17,6.41,3.59A2,2,0,0,0,3.59,6.41L47.17,50,3.59,93.59a2,2,0,1,0,2.82,2.82L50,52.83,93.59,96.41a2,2,0,0,0,2.82-2.82Z"></path></g></svg>
                    </div>
                </div>
        `;
        
        const hambugerBarToggle = document.getElementById('side-bar-closing-button');
        const hamburgerIcon = document.getElementById('hamburger-icon');
        const navBar = document.getElementById('navbar-container');
        const sideBar = document.getElementById('side-bar');;
        const arrows = document.getElementsByClassName('acc-arrow');
        const icons = document.getElementsByClassName('right-icon');
        const searchBar = document.getElementById('search-bar');
        const searchInput = document.getElementById('search-input');
        const searchOpenBtn = document.getElementById('search-open-btn');
        const searchClosingBtn = document.getElementById('search-closing-btn');
        
        // seach open botton
        searchOpenBtn.addEventListener('click', () => {
            searchBar.classList.add('z-20');
            searchBar.classList.remove('-z-10');
            searchBar.classList.remove('opacity-0');
            searchInput.focus();
        });
        
        // search close button
        searchClosingBtn.addEventListener('click', () => {
            searchBar.classList.add('-z-10');
            searchBar.classList.remove('z-20');
            searchBar.classList.add('opacity-0');
        });
        

        //side bar toggle
        Array.from(arrows).forEach(arrow => {
            const list = arrow.closest(".side-bar-acc").querySelector('.list');
            const accSection = arrow.closest(".acc-section");
            accSection.addEventListener('click', () => {
                list.classList.toggle('hidden');
                arrow.classList.toggle('rotate-180');
            });
        });


        // hamburge bar toggle
        hambugerBarToggle.addEventListener('click', () => {
            hambugerBarToggle.classList.toggle('opacity-1');
            hamburgerIcon.classList.toggle('opacity-0');
            navBar.classList.toggle('bg-white');
            sideBar.classList.toggle('left-[calc(-100%)]');

            Array.from(icons).forEach(icon => {
                if (!icon.classList.contains('must-fill-white')) {
                    icon.classList.add('must-fill-white')
                } else icon.classList.remove('must-fill-white');

                if (icon.classList.contains('fill-white')) {
                    icon.classList.toggle('fill-black')
                    icon.classList.toggle('fill-white')
                };
            });
        });

        // default setting for side bar
        document.addEventListener('DOMContentLoaded', () => {
            if (window.innerWidth < 798) {
                Array.from(icons).forEach(icon => {
                    icon.classList.remove('fill-black')
                    icon.classList.add('fill-white')
                    icon.classList.add('must-fill-white')
                });
            };
        });

        // reset sidebar when the screen is tablet or bigger
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 798) {
                hambugerBarToggle.classList.remove('opacity-1');
                hamburgerIcon.classList.remove('opacity-0');
                navBar.classList.remove('bg-white');
                sideBar.classList.add('left-[calc(-100%)]');

                Array.from(icons).forEach(icon => {
                    icon.classList.remove('fill-black');
                    icon.classList.add('fill-white');
                    icon.classList.remove('must-fill-white');
                });
            }else
            Array.from(icons).forEach(icon => {
                icon.classList.remove('fill-black');
                icon.classList.add('fill-white');
                icon.classList.add('must-fill-white');
            });
        });


    };
};

customElements.define('nav-bar', Navbar);