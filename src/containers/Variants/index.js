import Variants from "./Variants";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    data: state
  };
};

export default connect(mapStateToProps)(Variants);
