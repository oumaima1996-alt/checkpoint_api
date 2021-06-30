import React from 'react'
import './UserList.css'

const UserList = ({user}) => {
    return (
        <div>
            <h1>{user.name}</h1>
            {/* <div class="wrapper">
		      <div class="wrapper-inner">
			    <div class="box-wrapper">
				  <div class="box">
					 <div class="avatar">
						<img src="http://remtsoy.com/experiments/user_card/img/avatar.jpg"/>
					 </div>
					<div class="box-inner">
						<h3 class="name">Christina W. Turner</h3>
						<h4 class="occupation">interaction designer</h4>
						<p class="location"><i class="fa fa-map-marker"></i>Austin, Texas</p>
						<h3 class="followers-title">2.5k+ followers</h3>
						<ul class="followers-list">
							<li><a href="#"><img src="http://remtsoy.com/experiments/user_card/img/follower-1.jpg" alt=""/></a></li>
							<li><a href="#"><img src="http://remtsoy.com/experiments/user_card/img/follower-2.jpg" alt=""/></a></li>
							<li><a href="#"><img src="http://remtsoy.com/experiments/user_card/img/follower-3.jpg" alt=""/></a></li>
							<li><a href="#"><img src="http://remtsoy.com/experiments/user_card/img/follower-4.jpg" alt=""/></a></li>
							<li class="follow-list-item"><a href="#"><i class="fa fa-plus"></i></a></li>
						</ul>
					</div>
					<ul class="social-list">
						<li><a href="#" class="fa fa-facebook"></a></li>
						<li><a href="#" class="fa fa-dribbble"></a></li>
						<li><a href="#" class="fa fa-twitter"></a></li>
						<li><a href="#" class="fa fa-pinterest"></a></li>
						<li><a href="#" class="fa fa-linkedin"></a></li>
					</ul>
				</div>
			</div>
		</div>
	</div> */}
        </div>
    )
}

export default UserList
