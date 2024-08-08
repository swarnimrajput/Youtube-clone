
const Videocard = ({ info }) => {
    if (!info || !info.snippet || !info.statistics) {
      return <div>Invalid video information</div>;
    }
  
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
  
    return (
      <div className="p-2 m-2 w-72 shadow-lg">
        <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
        <ul>
          <li className="font-bold py-2">{title}</li>
          <li>{channelTitle}</li>
          <li>{statistics.viewCount}</li>
        </ul>
      </div>
    );
  };
  
  export default Videocard;
  