import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl/FormikControl";
import styled from "styled-components";
import axios from "axios";

const OrderFormStyles = styled.div`
  display: flex;
`;

function FormikContainer() {
  const sideAngle = [
    { key: "89 stopni", value: "89" },
    { key: "88 stopni", value: "88" },
    { key: "87 stopni", value: "87" },
  ];
  const bottomAngle = [
    { key: "0,0 stopni", value: "0,0" },
    { key: "0,5 stopnia", value: "0,5" },
    { key: "0,7 stopnia", value: "0,7" },
  ];
  const diamond = [
    { key: "Tuning diamentami", value: "tak" },
    { key: "Zwykłe ostrzenie", value: "nie" },
  ];
  const snow = [
    { key: "Mokry", value: "mokry" },
    { key: "Zwykły", value: "zwykły" },
    { key: "Zmrożony", value: "zmrożony" },
  ];
  const fluor = [
    { key: "Smarowanie smarem fluorowym", value: "Fluor" },
    { key: "Smarowanie smarem hydrokarbonowym", value: "Hydrocarbon" },
  ];

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    sideAngle: "",
    bottomAngle: "",
    diamond: "",
    snow: "",
    fluor: "",
    pickupDate: null,
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    sideAngle: Yup.string().required("Required"),
    bottomAngle: Yup.string().required("Required"),
    diamond: Yup.string().required("Required"),
    snow: Yup.string().required("Required"),
    fluor: Yup.string().required("Required"),
    // pickupDate: Yup.date().required("Required").nullable(),
  });
  const onSubmit = (values) => {
    console.log("Form data", values);
    console.log("Saved data", JSON.parse(JSON.stringify(values)));
    const orderData = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      sideAngle: values.sideAngle,
      bottomAngle: values.bottomAngle,
      diamond: values.diamond,
      snow: values.snow,
      fluor: values.fluor,
    };
    axios
      .post(
        "https://europe-west3-ski-service-91995.cloudfunctions.net/api/order",
        orderData
      )
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <OrderFormStyles>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form>
              <FormikControl
                control="chakraInput"
                type="name"
                label="Name"
                name="name"
              />
              <FormikControl
                control="chakraInput"
                type="email"
                label="Email"
                name="email"
              />
              <FormikControl
                control="chakraInput"
                type="phone"
                label="Phone"
                name="phone"
              />
              <FormikControl
                control="radio"
                label="Kąt boczny krawędzi"
                name="sideAngle"
                options={sideAngle}
              />
              <FormikControl
                control="radio"
                label="Kąt dolny krawędzi"
                name="bottomAngle"
                options={bottomAngle}
              />
              <FormikControl
                control="radio"
                label="Tuning pilnikami diamentowymi"
                name="diamond"
                options={diamond}
              />
              <FormikControl
                control="radio"
                label="Smar na śnieg"
                name="snow"
                options={snow}
              />
              <FormikControl
                control="radio"
                label="Smar z fluorem"
                name="fluor"
                options={fluor}
              />
              {/* <FormikControl
                control="date"
                label="Pick a date"
                name="pickupDate"
              /> */}
              <button
                type="submit"
                disabled={
                  !formik.isValid || !formik.dirty || formik.isSubmitting
                }
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </OrderFormStyles>
  );
}

export default FormikContainer;

// GET ORDERS
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios(
//         "https://europe-west3-ski-service-91995.cloudfunctions.net/api/orders"
//       );

//       setData(result.data);
//     };

//     fetchData();
//   }, []);

//   return (
//     <ul>
//       {data.map((item) => (
//         <li key={item.orderId}>
//           <a>{item.email}</a>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default App;
