import OrderSharpCont from "./OrderSharpCont";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    infos: state
  };
};

export default connect(mapStateToProps)(OrderSharpCont);
