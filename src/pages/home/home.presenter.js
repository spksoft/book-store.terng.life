import React from "react";
import styled from "styled-components";
import { Input } from "antd";
import { translate } from "react-i18next";
import { css } from "glamor";
import Logo from "../../components/Logo";
import BookCover from "../../components/BookCover";

const Search = Input.Search;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FlexElement = styled.div`
  display: flex;
`;

const Link = styled.a`
  color: #3E7EFF;
`

const widthMax = css({
  width: "600px"
});

const spaceLeft = css({
  paddingLeft: "10px"
})

const flexColumn = css({
  flexDirection: 'column'
})

const justifyBetween = css({
  justifyContent: "space-between"
})

const justifyEnd = css({
  justifyContent: "flex-end"
})

const spaceTop = css({
  paddingTop: "20px",
});

// const bookListRender = (list) => {
//   return 
// }

const Presenter = ({ t, i18n }) => (
  <PageContainer>
    <FlexElement>
      <Logo src="/images/logo.png" />
    </FlexElement>
    <FlexElement {...widthMax} {...spaceTop}>
      <Search
        placeholder={t("home.search-text")}
        enterButton={t("home.search-button")}
        onSearch={value => console.log(value)}
      />
    </FlexElement>
    <FlexElement {...spaceTop} {...flexColumn}>
      <FlexElement {...widthMax}>
        <h4>{t("home.reccommended-text")}</h4>
      </FlexElement>
      <FlexElement {...widthMax}>
        <Link>Hot price |</Link>
        <Link {...spaceLeft}>Top rated |</Link>
        <Link {...spaceLeft}>Book of the day |</Link>
        <Link {...spaceLeft}>Book of the week</Link>
      </FlexElement>
      <FlexElement {...widthMax} {...justifyBetween} {...spaceTop}>
        <BookCover src="https://storage.naiin.com/system/application/bookstore/resource/product/201807/238469/1000209102_front_XL.jpg" title="จงทำสวนของเรา" rate={3} />
        <BookCover src="https://storage.naiin.com/system/application/bookstore/resource/product/201807/239070/1000209459_front_XL.jpg" title="อยากสำเร็จให้ยิ่งใหญ่ต้องทำทีมก้าวไปกับคุณ" rate={3.5} />
        <BookCover src="https://storage.naiin.com/system/application/bookstore/resource/product/201807/238952/1000209386_front_XL.jpg" title="แบบฝึกหัด คัด เขียน อ่าน ภาษาเกาหลี เบื้องต้น" rate={4} />
        <BookCover src="https://storage.naiin.com/system/application/bookstore/resource/product/201807/239071/1000209460_front_XL.jpg" title="มองหาคุณค่าชีวิต" rate={3.5} />
      </FlexElement>
      <FlexElement {...widthMax} {...spaceTop} {...justifyEnd}>
        <Link>{t("home.see-more")}</Link>
      </FlexElement>
    </FlexElement>
  </PageContainer>
);

export default translate("translations")(Presenter);
