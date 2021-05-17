
import {RecommendItem} from './components/components'
const Recommend = ({ valueRecommend, handleChooseRecommend }) => {
  return (
    <RecommendItem  onClick={(event) => handleChooseRecommend(event)}>
      {valueRecommend}
    </RecommendItem>
  );
};

export default Recommend;
