import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import IconButton from '@mui/material/IconButton'
import styled from 'styled-components'
import { YoutubeIcon, InstagramIcon } from '../assets/icons'

const footerLinks = {
  'Присоединиться к нам': ['Вакансии', 'для партнеров'],
  'Информация об компании': ['О нас', 'Часто задаваемые вопросы', 'Связаться с нами', 'Войти'],
}

const legalLinks = ['Положение и условия', 'Политика конфиденциальности']

export default function Footer() {
  return (
    <FooterWrapper component="footer">
      <Container maxWidth="xl" disableGutters>
        <Grid container spacing={4} alignItems="flex-start">
          {Object.entries(footerLinks).map(([title, links]) => (
            <Grid item xs={12} sm={6} md={title === 'Информация об компании' ? 5 : 3} key={title}>
              <FooterTitle variant="subtitle1">{title}</FooterTitle>

              <Grid container>
                {title === 'Информация об компании' ? (
                  <>
                    <Grid item xs={6}>
                      {links.map((link) => (
                        <FooterLink key={link} href="#">
                          {link}
                        </FooterLink>
                      ))}
                    </Grid>
                    <Grid item xs={6}>
                      {legalLinks.map((link) => (
                        <FooterLink key={link} href="#">
                          {link}
                        </FooterLink>
                      ))}
                    </Grid>
                  </>
                ) : (
                  <Grid item xs={12}>
                    {links.map((link) => (
                      <FooterLink key={link} href="#">
                        {link}
                      </FooterLink>
                    ))}
                  </Grid>
                )}
              </Grid>
            </Grid>
          ))}

          <Grid item xs={12} md="auto">
            <SocialColumn>
              <SocialButton href="https://www.instagram.com/">
                <SocialIcon src={InstagramIcon} alt="instagram" />
              </SocialButton>
              <SocialButton href="https://www.youtube.com/">
                <SocialIcon src={YoutubeIcon} alt="youtube" />
              </SocialButton>
            </SocialColumn>
          </Grid>
        </Grid>
      </Container>
    </FooterWrapper>
  )
}

const FooterWrapper = styled(Box)`
  background-color: #cc0000;
  padding: 40px 50px;
`

const FooterTitle = styled(Typography)`
  color: #ffffff;
  font-weight: 700 !important;
  font-size: 15px !important;
  margin-bottom: 16px !important;
`

const FooterLink = styled(Link)`
  color: rgba(255, 255, 255, 0.85) !important;
  font-size: 14px !important;
  display: block !important;
  margin-bottom: 10px !important;
  text-decoration: none !important;
  cursor: pointer;

  &:hover {
    color: #ffffff !important;
  }
`

const SocialColumn = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  margin-left: auto;
`

const SocialButton = styled(IconButton)`
  border: 2px solid rgba(255, 255, 255, 0.7) !important;
  border-radius: 8px !important;
  color: #ffffff !important;
  padding: 6px !important;

  &:hover {
    border-color: #ffffff !important;
    background-color: rgba(255, 255, 255, 0.1) !important;
  }
`

const SocialIcon = styled.img`
  width: 20px;
  height: 20px;
`
