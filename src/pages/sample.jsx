import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
  } from "@react-pdf/renderer";
import { useState,useEffect } from "react";

const styles = StyleSheet.create({
    page: {
      color: "black",
      margin: 60,
      fontSize: 12,
    },
    section: {
      margin: 10,
      padding: 2,
    },
    image: {
        width: 500,
        height: 500,
      },
    viewer: {
      width: window.innerWidth, 
      height: window.innerHeight,
    },
  });
  
  // Create Document Component
  function Sample() {
    const[content,setContent] = useState();
    useEffect(() => {
      setContent(sessionStorage.getItem("Summary"));
      console.log(sessionStorage.getItem("Summary"));
      }, []);
    return (
      <PDFViewer 
        style={styles.viewer}
      >
        <Document>

          <Page 
            size="A4" 
            style={styles.page}
          >
            <View 
            //  style={styles.section}
            >
              <Text className = "flex">{content}</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    );
  }
  export default Sample;