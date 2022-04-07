import Mission from '../../components/missions/mission';
import MissionsContainer from '../../components/missions/missionContainer';
import renderWthRedux from '../../utils/testHelpers';

describe('Mission components should render without crashing', () => {
   it('should MissionContainer render ', () => {
           let {getByTestId}  =renderWthRedux(<MissionsContainer/>)
  expect(getByTestId("table-body"))
   });
   it("Mission should render without crashing",()=>{
           let {getByTestId}  =renderWthRedux(<Mission
             id={1} description="Testing" mission="test123" status={true} />) 
   })
});
