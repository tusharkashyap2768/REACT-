import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Colors";

const HeroSection = () => {
  const theme = useContext(ThemeContext)[0];
  const currectTheme = AppTheme[theme];

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: `${currectTheme.backgroundColor}`,
        color: `${currectTheme.textColor}`,
        textAlign: "center"
      }}
    >
      <h1>Context API theme toggler</h1>
      <p>This is a nice paragraph</p>
      <button
        style={{
          backgroundColor: "#26ae60",
          padding: "10px 150px",
          fontSize: "20px",
          color: "#FFF",
          border: `${currectTheme.border}`
        }}
      >
        CLick Me
      </button>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in mi vestibulum, congue enim sed, semper turpis. Nulla auctor dapibus ligula id porta. Nunc mattis felis sed odio malesuada euismod. Aliquam erat volutpat. Sed in eros ac ante mattis auctor id nec felis. Donec maximus sagittis eleifend. Pellentesque pulvinar ullamcorper est. Cras venenatis velit et turpis pretium feugiat. Proin feugiat felis vulputate nisl sollicitudin ultrices laoreet eu dolor. Etiam efficitur, turpis id suscipit sodales, neque ante tempor libero, a lobortis elit tellus at enim. Vivamus non pulvinar nibh. Donec pellentesque tellus et felis tempus, ac interdum odio commodo. Nullam laoreet est dolor, eu ullamcorper lectus consectetur in. Pellentesque sagittis suscipit augue, ac hendrerit libero laoreet non. Fusce ac lectus ligula. Sed consectetur odio in neque fermentum tempor.

Aliquam aliquet tellus sit amet commodo gravida. Ut lorem ligula, rutrum a varius eu, euismod ac nulla. Aenean id aliquet elit, ac imperdiet augue. Sed dui mauris, porta vel ante eu, mollis condimentum mauris. Vestibulum eu odio eget nisi semper malesuada. Etiam a consectetur nisl. Quisque nec rutrum diam. Aenean nec turpis dui. Fusce vel tincidunt tellus, ut porttitor justo. Donec vestibulum congue magna, at pellentesque risus semper sit amet. Proin porttitor imperdiet mauris, ut ullamcorper ligula pharetra eu.

Suspendisse vitae odio urna. Suspendisse fringilla nibh sed magna volutpat hendrerit. Proin rhoncus accumsan turpis sed vulputate. Nullam scelerisque mauris nisi, sit amet auctor nisi bibendum quis. Nam suscipit leo sit amet auctor porttitor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse aliquet nisl sit amet auctor vestibulum. Nam mollis malesuada nunc, quis gravida dui dignissim eu. Fusce sed magna diam. Sed purus enim, tincidunt quis ultrices sed, vestibulum ac lacus. Suspendisse porttitor eget turpis et rhoncus. Ut suscipit mauris eget nisi varius, in elementum sem vulputate. Nulla volutpat eu massa vitae aliquam. Donec eu odio vel enim suscipit rhoncus non eu orci. Nulla et augue in libero vehicula molestie vitae in lectus. Etiam placerat dui nunc, nec pellentesque tellus efficitur vitae.

Duis tellus risus, ornare eu dignissim eu, malesuada suscipit turpis. Proin at nunc ante. Phasellus ac dui at tortor suscipit tempus sed non lectus. Donec ullamcorper sollicitudin nisl, sagittis tempor nisl lacinia sit amet. Etiam iaculis, justo at vehicula finibus, ipsum lacus convallis nisi, sit amet dictum ante arcu vitae urna. Suspendisse in elit id libero tincidunt dapibus ut ut ante. Fusce sit amet libero ac urna facilisis luctus in at libero. Maecenas feugiat sapien est, mattis mollis diam efficitur sed. Mauris consequat consequat tortor sed viverra. Vivamus non lectus non orci pellentesque cursus. Vestibulum id enim ex. Integer a dignissim nisi. Fusce finibus aliquam tellus eu venenatis. Curabitur eleifend sed lacus sed facilisis.

Mauris dictum eu arcu eu venenatis. Sed elementum tempor aliquam. Nam sed est varius, venenatis ipsum ut, efficitur sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat porttitor felis, non fermentum nisl. Phasellus tincidunt, libero nec consequat scelerisque, dolor felis vulputate diam, et interdum tortor leo sit amet velit. Donec lobortis facilisis dui, facilisis vehicula nisl finibus eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse convallis ac metus accumsan fermentum.</p>

    </div>
  );
};

export default HeroSection;
