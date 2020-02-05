import React from "react";
import styled from "styled-components";
import Header from "../components/home/Header";
const Content = () => {
  return (
    <ContentWrapper>
      <Header />
      <h1>Content</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore iure
        accusantium voluptatum assumenda maxime, quos repellendus magnam
        delectus sed aspernatur ipsum possimus temporibus suscipit vel facere
        fugit, labore, corrupti natus dicta perferendis velit nisi illum. Soluta
        esse quaerat repellat sapiente modi nobis ratione, nisi sunt et ipsum!
        Magnam cum placeat blanditiis mollitia aspernatur deserunt tenetur
        voluptatibus velit veritatis sunt! Ea repellat rerum obcaecati quia,
        ullam fuga, nam facere error officia pariatur deserunt cum eius
        praesentium! Excepturi unde aliquam, veniam molestiae perferendis minus?
        Sequi quidem error rerum in obcaecati debitis inventore impedit sed
        fuga, nemo expedita deleniti, quos veniam maxime odit! Dolore vero hic
        sed ullam, doloremque accusantium enim tempora eum omnis provident
        libero dolor officia sint repellendus, ipsam facere laborum numquam ipsa
        molestiae, exercitationem incidunt eligendi blanditiis consequuntur?
        Laudantium, ab pariatur perspiciatis aperiam hic quia provident fugiat
        ipsum! Aut vitae dicta excepturi ex! Laboriosam officia dignissimos
        nostrum? Fugit quibusdam doloremque porro perspiciatis eveniet quas
        officiis, consequuntur libero? Fuga reprehenderit velit aut ipsam enim,
        veritatis perferendis itaque dicta nihil recusandae placeat
        exercitationem? Inventore vitae minus similique illo ad quibusdam quidem
        fuga magni ex esse, corrupti reiciendis sapiente, et blanditiis
        laboriosam assumenda enim a at praesentium, asperiores deleniti dolores
        consequuntur cupiditate eligendi.
      </p>
    </ContentWrapper>
  );
};
const ContentWrapper = styled.section`
  margin: 200px, auto;
  h1 {
    font-size: 3rem;
    font-weight: 700;
  }
`;
export default Content;
