import React from "react";
import "./SearchPage.css";
import { TuneOutlined } from "@mui/icons-material";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlined />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AKedOLRPRvKqr-TPjLT1HyurMvFUzbeAbGq_JyM7QOLCNw=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="RJ Raunac No-Po"
        verified
        subs="2M"
        noOfVideos={386}
        description="RJ Raunac is one who cares about your smile and make you smile everytime. I uploads Cricket videos and give full information of the match in a funny way"
      />
      <hr />

      <VideoRow 
      views="1.4M"
      subs="2M"
      description="Do You Want to laugh for sometime then this video is must for you . You should watch it and enjoy it . It includes a lot of fun and laughter in it."
      timestamp="59 seconds ago"
      channel="RJ Raunac No-Po"
      title=" 🏀 For India It is must win Game."
      image="/images/1.jpg"
      />
      <VideoRow 
      views="3.5M"
      subs="2M"
      description="Do You Want to laugh for sometime then this video is must for you . You should watch it and enjoy it . It includes a lot of fun and laughter in it."
      timestamp="1 day ago"
      channel="RJ Raunac No-Po"
      title="You Should watch this India is awesome against this team."
      image="/images/2.jpg"
      />
      <VideoRow 
      views="1.4M"
      subs="2M"
      description="Do You Want to laugh for sometime then this video is must for you . You should watch it and enjoy it . It includes a lot of fun and laughter in it."
      timestamp="59 seconds ago"
      channel="RJ Raunac No-Po"
      title=" 🏀 For India It is must win Game."
      image="/images/3.jpg"
      />
      <VideoRow 
      views="3.5M"
      subs="2M"
      description="Do You Want to laugh for sometime then this video is must for you . You should watch it and enjoy it . It includes a lot of fun and laughter in it."
      timestamp="1 day ago"
      channel="RJ Raunac No-Po"
      title="You Should watch this India is awesome against this team."
      image="/images/4.jpg"
      />
      <VideoRow 
      views="1.4M"
      subs="2M"
      description="Do You Want to laugh for sometime then this video is must for you . You should watch it and enjoy it . It includes a lot of fun and laughter in it."
      timestamp="59 seconds ago"
      channel="RJ Raunac No-Po"
      title=" 🏀 For India It is must win Game."
      image="/images/5.jpg"
      />
      <VideoRow 
      views="3.5M"
      subs="2M"
      description="Do You Want to laugh for sometime then this video is must for you . You should watch it and enjoy it . It includes a lot of fun and laughter in it."
      timestamp="1 day ago"
      channel="RJ Raunac No-Po"
      title="You Should watch this India is awesome against this team."
      image="/images/6.jpg"
      />
      <VideoRow 
      views="1.4M"
      subs="2M"
      description="Do You Want to laugh for sometime then this video is must for you . You should watch it and enjoy it . It includes a lot of fun and laughter in it."
      timestamp="59 seconds ago"
      channel="RJ Raunac No-Po"
      title=" 🏀 For India It is must win Game."
      image="/images/7.jpg"
      />
      <VideoRow 
      views="3.5M"
      subs="2M"
      description="Do You Want to laugh for sometime then this video is must for you . You should watch it and enjoy it . It includes a lot of fun and laughter in it."
      timestamp="1 day ago"
      channel="RJ Raunac No-Po"
      title="You Should watch this India is awesome against this team."
      image="/images/8.jpg"
      />
      <VideoRow 
      views="1.4M"
      subs="2M"
      description="Do You Want to laugh for sometime then this video is must for you . You should watch it and enjoy it . It includes a lot of fun and laughter in it."
      timestamp="59 seconds ago"
      channel="RJ Raunac No-Po"
      title=" 🏀 For India It is must win Game."
      image="/images/9.jpg"
      />
      <VideoRow 
      views="3.5M"
      subs="2M"
      description="Do You Want to laugh for sometime then this video is must for you . You should watch it and enjoy it . It includes a lot of fun and laughter in it."
      timestamp="1 day ago"
      channel="RJ Raunac No-Po"
      title="You Should watch this India is awesome against this team."
      image="/images/10.jpg"
      />
      <VideoRow 
      views="3.5M"
      subs="2M"
      description="Do You Want to laugh for sometime then this video is must for you . You should watch it and enjoy it . It includes a lot of fun and laughter in it."
      timestamp="1 day ago"
      channel="RJ Raunac No-Po"
      title="You Should watch this India is awesome against this team."
      image="/images/11.jpg"
      />
      <VideoRow 
      views="1.4M"
      subs="2M"
      description="Do You Want to laugh for sometime then this video is must for you . You should watch it and enjoy it . It includes a lot of fun and laughter in it."
      timestamp="59 seconds ago"
      channel="RJ Raunac No-Po"
      title=" 🏀 For India It is must win Game."
      image="/images/12.jpg"
      />
      <VideoRow 
      views="1.4M"
      subs="2M"
      description="Do You Want to laugh for sometime then this video is must for you . You should watch it and enjoy it . It includes a lot of fun and laughter in it."
      timestamp="59 seconds ago"
      channel="RJ Raunac No-Po"
      title=" 🏀 For India It is must win Game."
      image="/images/13.jpg"
      />
    </div>
  );
}

export default SearchPage;
