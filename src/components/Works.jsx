import React from "react";
import styles from "./Works.module.css";
import { Grid, Image, Message } from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Works() {
  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(
    require.context("../assets/screenshots", false, /\.(png|jpe?g|svg)$/)
  );

  const notify = () => toast.error("Desculpa esse não tem link");

  return (
    <div>
      <Grid>
        <Grid.Row>
          {images.map((item) => {
            console.log(item);
            if (item.includes("no link")) {
              return (
                <Grid.Column key={item} mobile={16} tablet={8} computer={4}>
                  <Image src={item} className={styles.image} onClick={notify} />
                  {item.includes("copia") ? (
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Message warning>
                        <p>Design copiado</p>
                      </Message>
                    </div>
                  ) : (
                    <></>
                  )}
                </Grid.Column>
              );
            }

            const url =
              "https://bernardopiane.github.io/" + item.slice(24,-13);
            return (
              <Grid.Column key={item} mobile={16} tablet={8} computer={4}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <Image src={item} className={styles.image} />
                </a>
              </Grid.Column>
            );
          })}
        </Grid.Row>
      </Grid>
      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
