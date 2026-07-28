import styled from 'styled-components';

const Login = (props) => {
  return (
    <Container>
      <Component>
        <CTA>
          <CTALogoOne src='/images/cta-logo-one.svg' alt="" />
          <SingUp onClick={props.onClick}>Get All There</SingUp>
          <Discription>
            Get Premier Access to Raya and Last Dragon for an additional fee with a Disney+ subscription.
            As of 03/26/21, the price of Disney+ and The Disney Bundel will incresed by Rs 1000.
          </Discription>
          <CTALogoTwo src='/images/cta-logo-two.png' alt="" />
        </CTA>
        <BGimage />
      </Component>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Component = styled.div`
  margin-bottom: 10vh;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding: 80px 20px;
`;

const BGimage = styled.div`
  height: 100vh;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  background-image:
    linear-gradient(180deg, rgba(10, 14, 23, 0.55) 0%, rgba(10, 14, 23, 0.85) 100%),
    url('/images/login-background.jpg');
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  margin-bottom: 2px;
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0;
  align-items: center;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width: 100%;
  animation: rise 700ms var(--ease-standard, ease-out) both;

  @keyframes rise {
    from {
      opacity: 0;
      transform: translateY(16px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CTALogoOne = styled.img`
  margin-bottom: 20px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
  filter: drop-shadow(0 12px 30px rgba(0, 0, 0, 0.45));
`;

const SingUp = styled.a`
  font-family: var(--font-body, inherit);
  font-weight: 700;
  margin-bottom: 16px;
  width: 100%;
  max-width: 320px;
  border-radius: var(--radius-sm, 5px);
  font-size: 18px;
  border: 1px solid transparent;
  padding: 16.5px 0;
  letter-spacing: 1.5px;
  color: #f9f9f9;
  background-color: #0063e5;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(0, 99, 229, 0.35);
  transition: transform 200ms var(--ease-standard, ease), background-color 200ms var(--ease-standard, ease),
    box-shadow 200ms var(--ease-standard, ease);

  &:hover {
    background-color: #1a75f0;
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(0, 99, 229, 0.45);
  }

  &:active {
    transform: translateY(0);
  }
`;

const Discription = styled.p`
  font-size: 14px;
  font-family: var(--font-body, sans-serif);
  color: hsla(0, 0%, 95.3%, 0.8);
  max-width: 560px;
  margin: 0 0 28px;
  line-height: 1.6;
  letter-spacing: 0.3px;
`;

const CTALogoTwo = styled.img`
  max-width: 600px;
  min-height: 1px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
  margin-bottom: 20px;
  opacity: 0.95;
`;

export default Login;