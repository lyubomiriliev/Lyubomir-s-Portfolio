import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Button,
} from "@react-email/components";

const Email = ({ reqBody }) => {
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
        <Container>
          <Heading
            style={{ color: "#000", fontSize: "24px", fontWeight: "bold" }}
          >
            Hello Lyubomir, you've received a new message!
          </Heading>
          <Text>
            <strong>From:</strong> {reqBody.firstName} {reqBody.lastName} <br />
            <strong>Company:</strong> {reqBody.company} <br />
            <strong>Phone:</strong> {reqBody.phone}
          </Text>
          <Text style={{ marginTop: "20px", lineHeight: "1.6" }}>
            {reqBody.message}
          </Text>
          <Button
            href="https://example.com"
            style={{
              marginTop: "30px",
              background: "#000",
              color: "#fff",
              padding: "12px 20px",
              textDecoration: "none",
              borderRadius: "4px",
            }}
          >
            View More
          </Button>
        </Container>
      </Body>
    </Html>
  );
};

export default Email;
