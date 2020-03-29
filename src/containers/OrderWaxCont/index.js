import OrderWaxCont from "./OrderWaxCont";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    data: state
  };
};

export default connect(mapStateToProps)(OrderWaxCont);
