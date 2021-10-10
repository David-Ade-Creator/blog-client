import React from "react";
import { ThemeProvider } from 'theme-ui';
import { Layout } from "../components/layouts";
import theme from '../theme';

export default function Home() {

  return (
    <ThemeProvider theme={theme}>
      <Layout></Layout>
    </ThemeProvider>
  )
}



const styles ={
  console: "",
  main: "",
  footer: ""
}