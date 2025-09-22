import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const ContactUsSection = (): JSX.Element => {
  return (
    <section className="w-full relative">
      {/* Newsletter subscription bar */}
      <div className="flex w-full items-center justify-center gap-4 md:gap-[3.47vw] py-4 md:py-[1.39vw] bg-[#00009b]">
        <div className="container mx-auto max-w-[83%] flex flex-col md:flex-row items-center justify-between gap-4 md:gap-[3.47vw] px-4 md:px-[1.4vw]">
          <div className="relative w-fit [font-family:'Poppins',Helvetica] font-semibold text-white text-[4.20vw] md:text-[1.08vw] tracking-[0] md:leading-[1.66vw] whitespace-pre-line text-center md:text-left">
            Cadastre-se para receber{"\n"}notícias e novidades!
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-[0.69vw] w-full md:w-auto">
            <div className="flex w-full md:w-[24vw] items-center gap-[0.69vw] pl-4 md:pl-[1.81vw] pr-3 md:pr-[0.69vw] py-[1vw] md:py-[0.69vw] bg-white rounded-full md:rounded-[4.17vw] md:h-[3.056vw]">
              <Input
                className="border-none shadow-none font-BNG-TIPOGRAFIA-BNG-corpo-02 font-[number:var(--BNG-TIPOGRAFIA-BNG-corpo-02-font-weight)] text-[#666666] text-sm md:text-[1.11vw] tracking-[var(--BNG-TIPOGRAFIA-BNG-corpo-02-letter-spacing)] leading-[var(--BNG-TIPOGRAFIA-BNG-corpo-02-line-height)] [font-style:var(--BNG-TIPOGRAFIA-BNG-corpo-02-font-style)] font-light focus-visible:ring-0 focus-visible:ring-offset-0"
                type="text"
                placeholder="seu nome:"
              />
            </div>

            <div className="flex w-full md:w-[24vw] items-center gap-[0.69vw] pl-4 md:pl-[1.81vw] pr-3 md:pr-[0.69vw] py-[1vw] md:py-[0.5vw] bg-white rounded-full md:rounded-[4.17vw] md:h-[3.056vw]">
              <Input
                className="border-none shadow-none font-BNG-TIPOGRAFIA-BNG-corpo-02 font-[number:var(--BNG-TIPOGRAFIA-BNG-corpo-02-font-weight)] text-[#666666] text-sm md:text-[1.11vw] tracking-[var(--BNG-TIPOGRAFIA-BNG-corpo-02-letter-spacing)] leading-[var(--BNG-TIPOGRAFIA-BNG-corpo-02-line-height)] [font-style:var(--BNG-TIPOGRAFIA-BNG-corpo-02-font-style)] font-light focus-visible:ring-0 focus-visible:ring-offset-0"
                type="email"
                placeholder="Seu e-mail:"
              />
            </div>

            <Button className="w-full md:w-[8.54vw] py-[3vw]  md:py-0 md:pt-[0.24vw] h-auto md:h-[2.85vw] bg-[#003cff] rounded-full md:rounded-[6.94vw] font-BNG-bot-o-02 font-[number:var(--BNG-bot-o-02-font-weight)] text-white text-sm md:text-[0.83vw] text-center tracking-[var(--BNG-bot-o-02-letter-spacing)] leading-[var(--BNG-bot-o-02-line-height)] [font-style:var(--BNG-bot-o-02-font-style)] hover:bg-[#00009b] hover:border-white hover:border-2 font-medium">
              CADASTRAR
            </Button>
          </div>
        </div>
      </div>

      {/* Main footer area */}
      <div className="w-full bg-[#0c46e6] relative">
        <div className="container mx-auto max-w-[83%] py-8 md:py-[4.31vw] px-4 md:px-0">
          {/* Main footer content */}
          <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-[4vw]">
            {/* Coluna 1 - Company info card */}
            <Card className="w-full md:w-[18.542vw] h-auto md:h-[16.667vw] bg-[#00009b] rounded-[16px] md:rounded-[1.11vw] relative p-6 md:p-[2.08vw] border-none">
              <CardContent className="p-0 text-center">
                {/* <img
                  className="w-[42vw] h-auto md:w-[11.35vw] md:h-[4.24vw] mx-auto mb-6 md:mb-[2.43vw]"
                  alt="BNG Hub Logo"
                  src="/logoWhiteSvg.svg"
                /> */}

                <svg className="w-[42vw] h-auto md:w-[11.35vw] md:h-[4.24vw] mx-auto mb-6 md:mb-[2.43vw]" viewBox="0 0 164 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M93.4848 8.94873C95.0046 8.94873 96.1479 9.47252 96.1479 10.8872C96.1479 11.6201 95.675 12.2303 95.0504 12.4035C95.7261 12.602 96.311 13.2174 96.311 14.0367C96.311 15.456 95.2692 16.0721 93.6479 16.0721H90.7256V8.94873H93.4855H93.4848ZM91.8741 10.0275V11.9455H93.4497C94.248 11.9455 94.9443 11.8233 94.9443 10.9735C94.9443 10.1238 94.2381 10.0275 93.4397 10.0275H91.8741ZM91.8741 13.0189V14.9933H93.5969C94.5013 14.9933 95.1061 14.82 95.1061 13.9962C95.1061 13.1723 94.5013 13.0189 93.5969 13.0189H91.8741Z" fill="white" />
                  <path d="M103.611 14.0071C103.611 15.5586 102.493 16.1998 101.354 16.1998C100.216 16.1998 99.0977 15.5586 99.0977 14.0071V11.1982H100.165V13.9102C100.165 14.8515 100.688 15.1974 101.354 15.1974C102.019 15.1974 102.543 14.8515 102.543 13.9102V11.1982H103.61V14.0071H103.611Z" fill="white" />
                  <path d="M107.932 9.51381C107.932 9.93603 107.602 10.2567 107.18 10.2567C106.759 10.2567 106.438 9.93603 106.438 9.51381C106.438 9.09158 106.759 8.76099 107.18 8.76099C107.602 8.76099 107.932 9.09158 107.932 9.51381ZM107.719 16.0722H106.652V11.1974H107.719V16.0722Z" fill="white" />
                  <path d="M111.877 16.0728H110.811V8.74561H111.877V16.0728Z" fill="white" />
                  <path d="M118.582 11.7886V8.74609H119.645V16.0732H118.582V15.4877C118.247 15.9205 117.744 16.2 117.053 16.2C115.691 16.2 114.618 15.1266 114.618 13.6355C114.618 12.1444 115.691 11.071 117.053 11.071C117.744 11.071 118.247 11.3558 118.582 11.7886ZM115.711 13.6355C115.711 14.4899 116.265 15.1976 117.179 15.1976C118.094 15.1976 118.648 14.5258 118.648 13.6355C118.648 12.7453 118.059 12.0734 117.179 12.0734C116.3 12.0734 115.711 12.7804 115.711 13.6355Z" fill="white" />
                  <path d="M124.017 9.51381C124.017 9.93603 123.686 10.2567 123.265 10.2567C122.843 10.2567 122.523 9.93603 122.523 9.51381C122.523 9.09158 122.843 8.76099 123.265 8.76099C123.686 8.76099 124.017 9.09158 124.017 9.51381ZM123.803 16.0722H122.736V11.1974H123.803V16.0722Z" fill="white" />
                  <path d="M131.423 13.0093V16.0724H130.357V13.3605C130.357 12.5413 129.935 12.0832 129.223 12.0832C128.512 12.0832 127.963 12.536 127.963 13.3705V16.0724H126.896V11.1976H127.953V11.7931C128.344 11.2182 128.949 11.0708 129.447 11.0708C130.606 11.0708 131.424 11.8695 131.424 13.0093H131.423Z" fill="white" />
                  <path d="M137.99 11.7832V11.1976H139.057V15.7312C139.057 17.2627 138.071 18.2041 136.445 18.2041C135.718 18.2041 134.921 18.0056 134.407 17.6392L134.793 16.7389C135.286 17.039 135.85 17.2322 136.445 17.2322C137.441 17.2322 137.99 16.6825 137.99 15.777V15.3853C137.624 15.8533 137.075 16.0977 136.369 16.0977C135.256 16.0977 134.112 15.1616 134.112 13.5842C134.112 12.0069 135.256 11.0708 136.369 11.0708C137.075 11.0708 137.624 11.3204 137.99 11.7832ZM135.204 13.5842C135.204 14.4034 135.744 15.0952 136.643 15.0952C137.542 15.0952 138.081 14.4386 138.081 13.5842C138.081 12.7298 137.501 12.0733 136.643 12.0733C135.784 12.0733 135.204 12.7604 135.204 13.5842Z" fill="white" />
                  <path d="M96.8859 30.3187H95.8488L91.8794 25.1644L91.8741 30.3187H90.7256V23.1953H91.7627L95.7368 28.3496V23.1953H96.8853V30.3187H96.8859Z" fill="white" />
                  <path d="M104.484 27.8764C104.484 28.0138 104.474 28.1512 104.464 28.2734H100.866C101.008 29.1483 101.623 29.5148 102.314 29.5148C102.802 29.5148 103.321 29.3216 103.722 29.001L104.25 29.7591C103.656 30.2676 102.985 30.4462 102.248 30.4462C100.789 30.4462 99.7571 29.4285 99.7571 27.8817C99.7571 26.3349 100.748 25.3171 102.181 25.3171C103.614 25.3171 104.478 26.3554 104.484 27.8764H104.484ZM100.871 27.4641H103.397C103.28 26.706 102.838 26.2632 102.162 26.2632C101.404 26.2632 100.983 26.7518 100.871 27.4641Z" fill="white" />
                  <path d="M110.495 26.4119H108.629V28.5336C108.629 29.1902 108.975 29.4444 109.402 29.4444C109.732 29.4444 110.093 29.2971 110.383 29.1138L110.804 29.9636C110.413 30.2278 109.92 30.4469 109.31 30.4469C108.207 30.4469 107.562 29.8514 107.562 28.5542V26.4119H106.591V25.4453H107.562V23.9695H108.629V25.4453H110.494V26.4119H110.495Z" fill="white" />
                  <path d="M118.454 29.1696L119.603 25.4453H120.711L119.1 30.3201H117.829L116.625 26.6463L115.42 30.3201H114.17L112.559 25.4453H113.692L114.836 29.1497L116.035 25.4453H117.24L118.455 29.1696H118.454Z" fill="white" />
                  <path d="M128.037 27.8817C128.037 29.3422 126.919 30.4462 125.414 30.4462C123.91 30.4462 122.797 29.3422 122.797 27.8817C122.797 26.4212 123.91 25.3171 125.414 25.3171C126.918 25.3171 128.037 26.4212 128.037 27.8817ZM123.89 27.8817C123.89 28.8025 124.546 29.4438 125.414 29.4438C126.283 29.4438 126.944 28.8025 126.944 27.8817C126.944 26.9609 126.284 26.3196 125.414 26.3196C124.545 26.3196 123.89 26.9609 123.89 27.8817Z" fill="white" />
                  <path d="M134.061 25.4551L133.807 26.5087C133.583 26.3918 133.258 26.3308 132.999 26.3308C132.323 26.3308 131.84 26.8087 131.84 27.6386V30.32H130.778V25.4452H131.83V25.9948C132.15 25.5321 132.648 25.3184 133.243 25.3184C133.569 25.3184 133.818 25.3589 134.062 25.4558L134.061 25.4551Z" fill="white" />
                  <path d="M137.635 27.2977H138.169L139.775 25.4455H141.112L139.074 27.7405L141.133 30.3203H139.786L138.165 28.265H137.636V30.3203H136.569V22.9932H137.636V27.2977H137.635Z" fill="white" />
                  <path d="M150.649 26.4116H148.982V30.3192H147.915V26.4116H146.939V25.445H147.915V24.6205C147.915 23.6433 148.408 22.8652 149.546 22.8652C150.115 22.8652 150.542 23.0179 150.903 23.2317L150.527 24.1273C150.278 23.9852 149.937 23.8677 149.617 23.8677C149.205 23.8677 148.982 24.1372 148.982 24.6205V25.445H150.649V26.4116Z" fill="white" />
                  <path d="M157.973 27.8817C157.973 29.3422 156.855 30.4462 155.35 30.4462C153.846 30.4462 152.733 29.3422 152.733 27.8817C152.733 26.4212 153.847 25.3171 155.35 25.3171C156.854 25.3171 157.973 26.4212 157.973 27.8817ZM153.826 27.8817C153.826 28.8025 154.482 29.4438 155.35 29.4438C156.219 29.4438 156.88 28.8025 156.88 27.8817C156.88 26.9609 156.22 26.3196 155.35 26.3196C154.481 26.3196 153.826 26.9609 153.826 27.8817Z" fill="white" />
                  <path d="M163.998 25.4551L163.744 26.5087C163.52 26.3918 163.195 26.3308 162.936 26.3308C162.26 26.3308 161.777 26.8087 161.777 27.6386V30.32H160.715V25.4452H161.767V25.9948C162.087 25.5321 162.585 25.3184 163.18 25.3184C163.506 25.3184 163.755 25.3589 163.999 25.4558L163.998 25.4551Z" fill="white" />
                  <path d="M96.8192 38.4601L95.9757 39.2794C95.5281 38.7449 94.8577 38.4143 94.0647 38.4143C92.6111 38.4143 91.5435 39.4672 91.5435 41.0041C91.5435 42.541 92.6111 43.5939 94.0136 43.5939C95.3093 43.5939 96.0719 42.922 96.2549 41.747H94.369V40.6788H97.4996C97.5042 40.7704 97.5095 40.862 97.5095 40.9536C97.5095 42.999 96.2131 44.6932 94.0129 44.6932C92.1781 44.6932 90.3386 43.3808 90.3386 41.0041C90.3386 38.8618 91.9042 37.3103 94.064 37.3103C95.1972 37.3103 96.1733 37.7378 96.8185 38.4601H96.8192Z" fill="white" />
                  <path d="M103.632 39.7017L103.378 40.7553C103.154 40.6384 102.829 40.5773 102.57 40.5773C101.894 40.5773 101.411 41.0553 101.411 41.8852V44.5665H100.349V39.6917H101.401V40.2414C101.721 39.7787 102.219 39.5649 102.814 39.5649C103.14 39.5649 103.389 39.6054 103.633 39.7024L103.632 39.7017Z" fill="white" />
                  <path d="M110.824 42.129C110.824 43.5895 109.706 44.6935 108.201 44.6935C106.696 44.6935 105.584 43.5895 105.584 42.129C105.584 40.6685 106.697 39.5645 108.201 39.5645C109.705 39.5645 110.824 40.6685 110.824 42.129ZM106.677 42.129C106.677 43.0498 107.332 43.6911 108.201 43.6911C109.07 43.6911 109.731 43.0498 109.731 42.129C109.731 41.2082 109.07 40.5669 108.201 40.5669C107.332 40.5669 106.677 41.2082 106.677 42.129Z" fill="white" />
                  <path d="M118.804 43.4162L119.953 39.6919H121.061L119.449 44.5667H118.179L116.975 40.8928L115.77 44.5667H114.52L112.908 39.6919H114.042L115.186 43.3963L116.385 39.6919H117.59L118.805 43.4162H118.804Z" fill="white" />
                  <path d="M126.919 40.6585H125.054V42.7802C125.054 43.4368 125.399 43.691 125.826 43.691C126.157 43.691 126.517 43.5436 126.807 43.3604L127.229 44.2102C126.838 44.4744 126.344 44.6935 125.735 44.6935C124.632 44.6935 123.986 44.098 123.986 42.8008V40.6585H123.015V39.6919H123.986V38.2161H125.053V39.6919H126.918V40.6585H126.919Z" fill="white" />
                  <path d="M130.706 40.2711C131.098 39.7114 131.698 39.5641 132.19 39.5641C133.349 39.5641 134.167 40.3627 134.167 41.5026V44.5657H133.1V41.8538C133.1 41.0345 132.678 40.5765 131.967 40.5765C131.255 40.5765 130.706 41.0292 130.706 41.8637V44.5657H129.639V37.2385H130.706V40.2711Z" fill="white" />
                  <path d="M57.1613 20.5359V28.0045C57.1613 29.5061 55.9451 30.723 54.4458 30.723H50.1601C48.6601 30.723 47.4446 29.5055 47.4446 28.0045V20.5611H47.4427C47.4427 16.7518 44.3592 13.6655 40.5569 13.6655C38.4721 13.6655 36.6021 14.5936 35.3402 16.0607C34.9052 16.5666 34.1094 16.5367 33.7162 15.997C31.6241 13.1264 28.8052 10.8188 25.5321 9.349C24.5745 8.91881 23.9539 7.97212 23.9539 6.92188V2.07164C23.9539 1.0433 24.7867 0.209473 25.8139 0.209473H31.8104C32.8369 0.209473 33.6685 1.04263 33.6685 2.06964V3.75057C33.6685 4.53527 34.4397 5.08494 35.181 4.83068C36.8667 4.25244 38.6736 3.93711 40.5569 3.93711C49.7204 3.93711 57.1487 11.3665 57.1599 20.5366H57.1619L57.1613 20.5359Z" fill="white" />
                  <path d="M78.0156 8.927H73.7319C72.232 8.927 71.0165 10.1445 71.0165 11.6456C71.0165 12.2397 70.4263 12.65 69.87 12.4449C68.0809 11.7843 66.1473 11.4232 64.1307 11.4232C62.7229 11.4232 61.3549 11.5984 60.0499 11.929C59.6116 12.0399 59.3537 12.494 59.4783 12.9295C60.1176 15.1614 61.0201 20.5667 61.0201 20.5667C61.0201 21.1781 61.6096 21.599 62.1958 21.4277C62.8091 21.2478 63.4577 21.1515 64.1301 21.1515C67.9304 21.1515 71.0158 24.2359 71.0158 28.0452C71.0158 31.8545 67.9304 34.9388 64.1301 34.9388C62.453 34.9388 60.9146 34.3394 59.721 33.3416C59.3225 33.0083 58.7595 32.9924 58.3424 33.3017C57.2523 34.1097 55.9035 34.587 54.4446 34.587H50.1589C49.5442 34.587 49.1424 35.2409 49.4288 35.7859C52.2093 41.069 57.7483 44.6699 64.1301 44.6699C66.0929 44.6699 67.9748 44.326 69.7221 43.6993C70.3521 43.4736 71.0152 43.931 71.0152 44.6008V44.6719H71.0105C70.9654 48.44 67.8999 51.4792 64.1274 51.4792C61.0784 51.4792 57.9505 50.0213 57.1806 46.7458C56.8816 45.4725 55.6064 45.0536 54.2994 45.0536H50.5197C48.5688 45.0536 47.1073 46.4889 47.5522 48.3902C49.2717 55.7379 56.2642 61.2096 64.1281 61.2096C72.9919 61.2096 80.2298 54.2549 80.7059 45.501C80.7152 45.4327 80.7218 39.7911 80.7264 34.9395H80.7311V11.6469C80.7311 10.1452 79.5149 8.92833 78.0156 8.92833V8.927Z" fill="white" />
                  <path d="M17.223 11.3791C14.7602 11.3791 12.4241 11.9195 10.3213 12.8808V2.93467C10.3213 1.42967 9.10252 0.209473 7.59924 0.209473H3.30558C1.8023 0.209473 0.583496 1.42967 0.583496 2.93467V28.041C0.583496 37.2423 8.03292 44.6995 17.223 44.6995C26.4171 44.6995 33.8658 37.2416 33.8658 28.041C33.8658 18.8404 26.4164 11.3791 17.223 11.3791ZM17.223 34.9506C13.4134 34.9506 10.3213 31.8582 10.3213 28.041C10.3213 24.2244 13.4134 21.1314 17.223 21.1314C21.0353 21.1314 24.1247 24.2237 24.1247 28.041C24.1247 31.8582 21.0359 34.9506 17.223 34.9506Z" fill="white" />
                  <path d="M10.7788 49.8103V60.589C10.7788 60.8665 10.554 61.0922 10.2762 61.0922H8.41348C8.13629 61.0922 7.91083 60.8671 7.91083 60.589V56.2406H3.45073V60.589C3.45073 60.8665 3.22594 61.0922 2.9481 61.0922H1.08541C0.808227 61.0922 0.582764 60.8671 0.582764 60.589V49.8103C0.582764 49.5328 0.807564 49.3071 1.08541 49.3071H2.9481C3.22528 49.3071 3.45073 49.5322 3.45073 49.8103V53.9237H7.91083V49.8103C7.91083 49.5328 8.13563 49.3071 8.41348 49.3071H10.2762C10.5533 49.3071 10.7788 49.5322 10.7788 49.8103Z" fill="white" />
                  <path d="M18.5102 49.3075C18.7874 49.3075 19.0129 49.5326 19.0129 49.8108V56.3585C19.0129 57.0636 19.1859 57.6066 19.5327 57.987C19.8789 58.3674 20.3875 58.5579 21.0586 58.5579C21.7296 58.5579 22.2436 58.3681 22.601 57.987C22.9584 57.6066 23.1374 57.0636 23.1374 56.3585V49.8108C23.1374 49.5333 23.3622 49.3075 23.6401 49.3075H25.5028C25.7799 49.3075 26.0054 49.5326 26.0054 49.8108V56.3413C26.0054 57.3935 25.7819 58.2831 25.335 59.01C24.8881 59.7376 24.2873 60.286 23.5327 60.6551C22.778 61.0242 21.9365 61.2088 21.0088 61.2088C20.0811 61.2088 19.2509 61.0269 18.5188 60.6631C17.7868 60.2993 17.2079 59.7509 16.7835 59.018C16.3584 58.2851 16.1462 57.3928 16.1462 56.3406V49.8101C16.1462 49.5326 16.371 49.3069 16.6489 49.3069H18.5116L18.5102 49.3075Z" fill="white" />
                  <path d="M40.1386 56.0644C40.5517 56.5962 40.7593 57.203 40.7593 57.8854C40.7593 58.8706 40.4151 59.6507 39.7281 60.2276C39.0405 60.8038 38.0823 61.0919 36.8522 61.0919H31.8715C31.5944 61.0919 31.3689 60.8669 31.3689 60.5887V49.8101C31.3689 49.5326 31.5937 49.3069 31.8715 49.3069H36.6678C37.8641 49.3069 38.7997 49.5811 39.4768 50.1294C40.1532 50.6778 40.4914 51.422 40.4914 52.362C40.4914 53.0558 40.3097 53.632 39.9463 54.0907C39.5829 54.5501 39.0995 54.8688 38.496 55.0474C39.1777 55.1928 39.7255 55.5314 40.1392 56.0631L40.1386 56.0644ZM34.2362 54.0748H36.1141C36.5836 54.0748 36.9444 53.9712 37.1957 53.7641C37.447 53.557 37.573 53.2523 37.573 52.8493C37.573 52.4463 37.447 52.139 37.1957 51.9259C36.9444 51.7134 36.5836 51.6072 36.1141 51.6072H34.2362V54.0748ZM37.4642 58.4477C37.7268 58.2293 37.8581 57.9133 37.8581 57.4991C37.8581 57.0848 37.7209 56.7608 37.447 56.5258C37.1731 56.2908 36.7958 56.1733 36.3151 56.1733H34.2362V58.775H36.3489C36.8296 58.775 37.201 58.6655 37.4642 58.4477Z" fill="white" />
                </svg>


                <div className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] md:mt-0 mt-[11vw] text-white text-sm md:text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] text-left">
                  Somos{" "}
                  <span className="font-bold">Builders</span>,{" "}
                  <span className="font-bold">Networkers</span> e{" "}
                  <span className="font-bold">Growthers</span>. Somos gente que constrói, se relaciona e que faz crescer.
                </div>
              </CardContent>

              {/* Footer spin image */}
              <img
                src="/footer_spin.png"
                alt=""
                className="absolute bottom-[-4vw] right-[-2.7vw] md:bottom-[-1vw] md:right-[-0.7vw] w-[10vw] h-auto md:w-[2.43vw] md:h-[2.701vw] animate-spin"
                style={{
                  animation: 'spin 8s linear infinite'
                }}
              />
            </Card>

            {/* Coluna 2 - Links principais + Contato */}
            <div className="flex flex-col w-full md:w-[38.42vw]">
              {/* Linha 1: Links organizados */}
              <div className="flex flex-col md:flex-row gap-8 md:gap-[2vw] mb-0">
                {/* Coluna 1: Institucional */}
                <div className="flex flex-col gap-2 md:gap-[0.6vw] w-full md:w-fit">
                  <h3 className="font-BNG-subt-tulo font-[number:var(--BNG-subt-tulo-font-weight)] text-white text-lg md:text-[1.25vw] tracking-[var(--BNG-subt-tulo-letter-spacing)] leading-[var(--BNG-subt-tulo-line-height)] [font-style:var(--BNG-subt-tulo-font-style)] mb-2 md:mb-[0.5vw]">
                    Institucional
                  </h3>
                  <nav className="flex flex-col gap-1 md:gap-0">
                    <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-sm md:text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#0dffc0] transition-colors">
                      Quem Somos
                    </a>
                    <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-sm md:text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#0dffc0] transition-colors">
                      Missão, Visão e Valores
                    </a>
                    <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-sm md:text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#0dffc0] transition-colors">
                      Nossa História
                    </a>
                    <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-sm md:text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#0dffc0] transition-colors">
                      Nossas Marcas
                    </a>
                    <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-sm md:text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#0dffc0] transition-colors">
                      Onde Estamos
                    </a>
                    <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-sm md:text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#0dffc0] transition-colors">
                      Nossos Números
                    </a>
                    <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-sm md:text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#0dffc0] transition-colors">
                      ESG
                    </a>
                  </nav>
                </div>

                {/* Coluna 2: Carreiras, Imprensa e Políticas */}
                <div className="flex flex-col gap-4 md:gap-[1vw] flex-1">
                  {/* Linha 1: Carreiras e Imprensa lado a lado */}
                  <div className="flex flex-col md:flex-row gap-4 md:gap-0">
                    {/* Carreiras */}
                    <div className="flex flex-col gap-2 md:gap-[0.6vw] w-full md:w-fit">
                      <h3 className="font-BNG-subt-tulo font-[number:var(--BNG-subt-tulo-font-weight)] text-white text-lg md:text-[1.25vw] tracking-[var(--BNG-subt-tulo-letter-spacing)] leading-[var(--BNG-subt-tulo-line-height)] [font-style:var(--BNG-subt-tulo-font-style)] mb-2 md:mb-[0.5vw]">
                        Carreiras
                      </h3>
                      <nav className="flex flex-col gap-1 md:gap-[0.3vw]">
                        <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-sm md:text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#0dffc0] transition-colors">
                          Pessoas & Cultura
                        </a>
                        <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-sm md:text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#0dffc0] transition-colors">
                          Pilares
                        </a>
                        <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-sm md:text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#0dffc0] transition-colors">
                          Trabalhe Conosco
                        </a>
                      </nav>
                    </div>

                    {/* Imprensa */}
                    <div className="flex flex-col gap-2 md:gap-[0.6vw] w-full md:w-fit md:ml-[2vw]">
                      <h3 className="font-BNG-subt-tulo font-[number:var(--BNG-subt-tulo-font-weight)] text-white text-lg md:text-[1.25vw] tracking-[var(--BNG-subt-tulo-letter-spacing)] leading-[var(--BNG-subt-tulo-line-height)] [font-style:var(--BNG-subt-tulo-font-style)] mb-2 md:mb-[0.5vw]">
                        Imprensa
                      </h3>
                      <nav className="flex flex-col gap-1 md:gap-[0.3vw]">
                        <Link to="/hub-news" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-sm md:text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#0dffc0] transition-colors">
                          Hub News
                        </Link>
                        <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-sm md:text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#0dffc0] transition-colors">
                          Fale Conosco
                        </a>
                      </nav>
                    </div>
                  </div>

                  {/* Linha 2: Políticas de Privacidade */}
                  <div className="pt-4 md:pt-[1vw] border-t border-white/30">
                    <Link to="/politicas-de-privacidade" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-sm md:text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] underline hover:text-[#0dffc0] transition-colors">
                      Políticas de Privacidade
                    </Link>
                  </div>
                </div>
              </div>

              {/* Linha 2: Informações de contato */}
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-[4vw] mt-6 md:mt-[2vw]">
                {/* Address */}
                <div className="flex items-start gap-3 md:gap-[0.69vw]">
                  <img
                    className="w-4 h-5 md:w-[1.04vw] md:h-[1.32vw] mt-1"
                    alt="Location icon"
                    src="/vector-17.svg"
                  />
                  <address className="not-italic font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-[3.2vw] md:text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)]">
                    <Link to="https://maps.app.goo.gl/1PCJsf8cSr8GsGtP8" target="_blank" rel="noopener noreferrer" className="hover:text-[#0dffc0] transition-colors">
                      Av. Eng. Luis Carlos Berrini, 1748 - Cj. 1710 Cidade Monções, São Paulo – SP
                    </Link>
                  </address>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 md:gap-[0.69vw]">
                  <img className="w-5 h-4 md:w-[1.39vw] md:h-[1.11vw]" alt="Email icon" src="/vector-21.svg" />
                  <a
                    href="mailto:marketing@bnghub.com"
                    className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-[3.2vw] md:text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] whitespace-nowrap [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#0dffc0] transition-colors"
                  >
                    marketing@bnghub.com
                  </a>
                </div>
              </div>
            </div>

            {/* Coluna 3 - Social media e WhatsApp */}
            <div className="flex flex-col items-center md:items-end gap-6 md:gap-[2vw]">
              {/* Social media section */}
              <div className="flex-shrink-0">
                <div className="relative w-40 h-20 md:w-[11.39vw] md:h-[5.42vw]">
                  <div className="absolute w-40 h-10 md:w-[11.39vw] md:h-[2.78vw] top-4 md:top-[1.25vw] left-0 rounded-lg border border-solid border-white" />
                  <div className="absolute w-36 h-10 md:w-[9.93vw] md:h-[2.85vw] top-8 md:top-[2.57vw] left-2 md:left-[0.69vw] flex justify-between ">
                    <a href="https://www.instagram.com/bnghub/">
                      <img className="md:w-[2.917vw]" src="./icon_insta.svg" alt="" />
                    </a>
                    <a href="https://www.youtube.com/@BNGHUB">
                      <img className="md:w-[2.917vw]" src="./icon_youtube.svg" alt="" />
                    </a>
                    <a href="https://www.linkedin.com/company/bnghub">
                      <img className="md:w-[2.917vw]" src="./icon_linkedin.svg" alt="" />
                    </a>
                  </div >

                  <div className="inline-flex items-center justify-center gap-2 md:gap-[0.69vw] p-2 pb-0 md:p-[0.35vw] absolute top-0 left-8 md:left-[2.5vw] bg-[#0c46e6] rounded-lg">
                    <div className="[font-family:'Poppins',Helvetica] font-bold text-white text-sm md:text-[1.11vw] tracking-[0] leading-[normal]">
                      Siga-nos!
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp button */}
              <a
                href="#"
                className="fixed bottom-6 right-4 md:bottom-[8vw] md:right-[2vw] hover:scale-110 transition-transform flex-shrink-0 z-50"
                aria-label="Contact us on WhatsApp"
              >
                <img
                  src="/floatWhatsIcon.png"
                  alt="WhatsApp"
                  className="w-12 h-12 md:w-[3.82vw] md:h-[3.82vw]"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright footer */}
        <div className="w-full h-12 md:h-[3.5vw] bg-[#00009b] rounded-[1.11vw_1.11vw_0px_0px] flex items-center justify-center px-4">
          <div className="font-BNG-overline font-[number:var(--BNG-overline-font-weight)] text-white text-xs md:text-[0.69vw] tracking-[var(--BNG-overline-letter-spacing)] leading-[var(--BNG-overline-line-height)] [font-style:var(--BNG-overline-font-style)] text-center md:ml-0">
            © 2025 - BNG HUB - Todos os direitos reservados.
          </div>
        </div>
      </div>
    </section>
  );
};