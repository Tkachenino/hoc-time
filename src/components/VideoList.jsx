import PropTypes from 'prop-types';
import Video from './Video';

function VideoList({list}) {
  return list.map(item => <Video key={item.url} url={item.url} date={item.date} />);
}

VideoList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    date: PropTypes.string
  }))
}

export default VideoList;
