import './App.css';
import { Carousel } from './lib';

function App() {
  let data = [
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455209/96_izeaab.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455209/91_rk5s8r.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455209/93_g3eeyc.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455209/94_hcek2l.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455209/95_qrehhp.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455209/92_oteacw.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455208/89_zblekw.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455208/90_gi9rjc.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455208/87_ftsu22.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455208/88_dryu3v.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455208/86_baodi9.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455208/85_h4zbnb.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455208/81_kwkvjk.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455208/84_jyhlyx.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455208/83_swnnnx.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455208/82_jljtcf.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455207/80_qrv8bs.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455207/77_xdimzu.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455207/76_vgtxvs.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455207/78_z4tifb.jpg',
    },

    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455207/79_qyz3id.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455207/74_vlhlw0.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455207/73_enhbzt.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455206/69_qehz7n.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455206/71_ta21k7.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455206/72_lhwpsj.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455206/70_vkrwta.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455206/68_pfte0k.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455206/67_ia61j9.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455206/66_rnx5ec.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455205/65_lscxdd.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455205/64_e8ueri.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455205/63_pfzdxv.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455205/59_tieuaw.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455205/62_pusew5.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455205/61_zjhpbb.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455205/60_nhudux.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455205/57_hj2rin.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455204/51_htqdhp.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455204/52_tefs97.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455204/54_kwazhz.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455204/53_yywuxw.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455204/56_qikyqz.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455204/46_tyrnh5.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455203/49_qrhjes.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455203/48_bltgas.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455203/50_gsynwm.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455203/47_jjbyww.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455202/45_iopnma.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455202/42_vvtw6f.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455202/44_pyaqej.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455202/41_t0omyn.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455202/43_x3bl2c.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455202/40_q75jam.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455201/38_jls6xr.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455201/37_m53crw.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455201/39_usxmjz.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455200/34_kq5qfv.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455200/36_uepcbn.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455200/35_nwfc5d.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455200/32_v4rv8y.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455200/31_k4cmvs.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455200/33_faqqiy.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455199/27_z7tpnn.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455199/28_dnxdl0.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455199/30_dq5chr.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455199/29_frun3d.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455199/26_rp0reb.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455199/25_w3nytw.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455198/21_ybwlge.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455198/24_hrlcm2.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455198/23_i5aeor.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455198/18_stz3hw.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455198/22_z8dj8q.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455197/20_sqebu2.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455197/17_vs3mdt.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455197/16_uz3725.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455196/14_eyshvt.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455196/114_onec0p.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455196/10_uczl5r.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455196/15_diqqgg.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455196/13_iqtmch.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455195/12_rcxovf.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455195/113_p7blxp.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455195/11_feiccf.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455195/111_yjdxpb.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455194/110_klubpd.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455194/108_bx2z5f.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455194/109_l5vdoy.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455194/9_hfhync.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455194/106_bavddz.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455193/107_mgco6o.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455193/8_unvb9k.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455193/103_anlixx.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455193/7_njdecx.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455193/102_k7jff3.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455192/1_zvlktp.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455192/5_tpwhmw.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455192/101_aq2g0w.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455192/104_fywmsy.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455192/105_cftbdg.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455192/3_secxdg.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455191/4_cn5aqd.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455191/2_v7mf3u.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455191/97_mhufxn.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455191/98_ez7lig.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455191/100_bx0ssc.jpg',
    },
    {
      image: 'https://res.cloudinary.com/emmanuel201290/image/upload/v1635455190/99_bfs2mh.jpg',
    },
  ];

  /* for (let i = 0; i < 3; i++) {
    console.log(`../assets/${i}.jpg`);
    data[i] = {
      image: `../assets/${i}.jpg`,
    };
  }*/

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  };
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  };
  return (
    <div className="App">
      <div style={{ textAlign: 'center' }}>
        <h2>Album Modified by Emmanuel@2019</h2>
        <p>Original code was created by Sahil</p>
        <p>you can open the image with the browser by right clicking - open image</p>
        <div
          style={{
            padding: '0 20px',
          }}
        >
          <Carousel
            data={data}
            time={50000}
            width="850px"
            height="70vh"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={false}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            showNavBtn={true}
            style={{
              textAlign: 'center',
              maxWidth: '850px',
              margin: '40px auto',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
