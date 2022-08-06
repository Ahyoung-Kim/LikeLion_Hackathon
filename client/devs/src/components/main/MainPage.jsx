import React from 'react';
import { Button } from 'react-bootstrap';
import './mainpage.css';



const MainPage = () => {
  return (
    <>
        <section className='updated-friends'>
            <div style={{justifyContent:'center'}}className='flex-box-r'>
            <div style={{width:'70vw'}}>
                
                <p style={{fontSize:'18px', fontWeight:'bold'}}>
                    업데이트한 친구들
                </p>
  
                <div className='updated-friends-box flex-box-c'>
                    
                    {/* 최대 8개 까지 보이도록 js 짜기 */}
                    <div style={{gap:'10px', alignItems:'center' ,justifyContent:'center'}}className='flex-box-r'>
                        <div className='updated-friends-profile'>
                            <img style={{color:'red'}}className="updated-friends-img" src={require('../../static/profile-img.png')}></img>
                            <span className='updated-friends-dot'></span>
                        </div>
                        <div className='updated-friends-profile'>
                            <img className="updated-friends-img" src={require('../../static/profile-img.png')}></img>
                            <span className='updated-friends-dot'></span>

                        </div>
                        <div className='updated-friends-profile'>
                            <img className="updated-friends-img" src={require('../../static/profile-img.png')}></img>
                            <span className='updated-friends-dot'></span>
                           
                        </div>
                    </div> 
                </div>
            </div>
            </div>
        </section>

        <section>
            <div style={{justifyContent:'center', marginBottom: '20px'}}className='flex-box-r'>
                <div className='updated-card'>
                    <div style={{alignItems:'center'}}className='flex-box-r'>
                        <img className="updated-card-img" src={require('../../static/profile-img.png')}></img>
                        <span className='updated-card-name'>
                            세은
                        </span>
                        <div className='updated-card-text'>
                            <span>
                                세은님이
                            </span>
                            <span className='updated-card-category'>
                                사이드 프로젝트/개발스타그램
                            </span>
                            <span>
                                을 업데이트 했습니다
                            </span>
                        </div>
                        <div className='updated-card-icon flex-box-r'>
                        <span class="material-symbols-outlined">
                        favorite
                        </span>
                            <span class="material-symbols-outlined">
                                chat
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className='updated-card-chips flex-box-r'>
                            <Button className='updated-card-chip' variant='secondary'>
                            #웹
                            </Button>
                            <Button className='updated-card-chip' variant='secondary'>
                            #백엔드
                            </Button>
                        </div>
                        
                    </div>
                    

                </div>      
            </div>  
        </section>



        <section>
            <div style={{justifyContent:'center', marginBottom: '20px'}}className='flex-box-r'>
                <div className='updated-card'>
                    <div style={{alignItems:'center'}}className='flex-box-r'>
                        <img className="updated-card-img" src={require('../../static/profile-img.png')}></img>
                        <span className='updated-card-name'>
                            세은
                        </span>
                        <div className='updated-card-text'>
                            <span>
                                세은님이
                            </span>
                            <span className='updated-card-category'>
                                사이드 프로젝트/개발스타그램
                            </span>
                            <span>
                                을 업데이트 했습니다
                            </span>
                        </div>
                        <div className='updated-card-icon flex-box-r'>
                            <span class="material-symbols-outlined">
                                favorite
                            </span>
                            <span class="material-symbols-outlined">
                                chat
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className='updated-card-chips flex-box-r'>
                            <Button className='updated-card-chip' variant='secondary'>
                            #웹
                            </Button>
                            <Button className='updated-card-chip' variant='secondary'>
                            #백엔드
                            </Button>

                        </div>
                    </div>
                    

                </div>      
            </div>  
        </section>

        
        <section>
            <div style={{justifyContent:'center', marginBottom: '20px'}}className='flex-box-r'>
                <div className='recommend-section flex-box-c'>
                    <div className='recommend-header flex-box-r'>
                        <div style={{fontSize:'20px'}}>
                            <span id='user-name'>
                                아영
                            </span>
                            <span>
                                님과 비슷한 개발자
                            </span>
                        </div>
                        <div className='recommend-card-chips flex-box-r'>
                            <Button className='updated-card-chip' variant='secondary'>
                            #웹
                            </Button>
                            <Button className='updated-card-chip' variant='secondary'>
                            #백엔드
                            </Button>

                        </div>
                    </div>
                    
                    <div style={{justifyContent:'center', gap:'20px', flexWrap:'wrap'}} className='flex-box-r'>
                        <div style={{alignItems:'center'}}className='recommend-card flex-box-c'>
                            <img className="recommend-card-img" src={require('../../static/profile-img.png')}></img>
                            <span className='recommend-card-name'>찬수</span>
                            <Button className='recommend-card-idol' variant='secondary'>idol 등록</Button>
                        </div>
                        <div style={{alignItems:'center'}}className='recommend-card flex-box-c'>
                            <img className="recommend-card-img" src={require('../../static/profile-img.png')}></img>
                            <div className='recommend-card-name'>찬수</div>
                            <Button className='recommend-card-idol' variant='secondary'>idol 등록</Button>
                        </div>
                        <div style={{alignItems:'center'}}className='recommend-card flex-box-c'>
                            <img className="recommend-card-img" src={require('../../static/profile-img.png')}></img>
                            <span className='recommend-card-name'>찬수</span>
                            <Button className='recommend-card-idol' variant='secondary'>idol 등록</Button>
                        </div>
                        <div style={{alignItems:'center'}}className='recommend-card flex-box-c'>
                            <img className="recommend-card-img" src={require('../../static/profile-img.png')}></img>
                            <div className='recommend-card-name'>찬수</div>
                            <Button className='recommend-card-idol' variant='secondary'>idol 등록</Button>
                        </div>
                        <div style={{alignItems:'center'}}className='recommend-card flex-box-c'>
                            <img className="recommend-card-img" src={require('../../static/profile-img.png')}></img>
                            <span className='recommend-card-name'>찬수</span>
                            <Button className='recommend-card-idol' variant='secondary'>idol 등록</Button>
                        </div>
                    </div>
                    

                </div>      
            </div>  
        </section>
   
    
    </>
  );
};

export default React.memo(MainPage);