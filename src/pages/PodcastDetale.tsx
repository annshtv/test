import DownLoad from "../components/DownLoad";
import '../index.css'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
import PodcastCarts from "../components/PodcastCarts";
import styles from "../components/Sponsor.module.css";
import ButtonSubscribe from "../UI/Buttons/ButtonSubscribe";
function PodcastDetale() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center  gap-[118px] bg-[#f7ede8;] pt-[100px] pb-[40px] bg-[url('pictures/Episode.png')] bg-cover bg-center">
        <div className="">
          <img src="pictures/coverr1.png" alt="" />
          <div className="flex justify-around items-center flex-row mt-[80px]">
            <p className="font-bold text-[14px] leading-[160%] text-[#4d4d4d]">
              Tags:
            </p>
            <div className="flex gap-[10px]">
              <p className="border border-[#4d4d4d] rounded-[4px]  py-[6px]  p-[5px] h-[34px] font-medium text-[14px] leading-[160%] text-[#4d4d4d]">
                mind-behaviour
              </p>
              <p className="border border-[#4d4d4d] rounded-[4px]  py-[6px] p-[5px] h-[34px] font-medium text-[14px] leading-[160%] text-[#4d4d4d]">
                health
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[25px]">
          <div className="flex justify-between">
            <p className="font-bold text-[16px] leading-[160%] text-[#cd4631]">
              Episode 1
            </p>
            <p className="font-bold text-[12px] leading-[160%] text-[#cd4631] border border-[#cd4631] rounded-[4px] px-[6px] py-[3px] w-[150px] h-[25px]">
              FEATURED EPISODE
            </p>
          </div>
          <h2 className="font-bold text-[36px] leading-[100%] tracking-[-0.02em] text-black">
            Are you a Perplexed Mind Person?
          </h2>
          <p className="font-medium text-[16px] leading-[160%] text-[#4d4d4d]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod{" "}
            <br />
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim{" "}
            <br />
            veniam, quis nostrud.
          </p>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[10px]">
              <img src="pictures/avatarka.png" alt="" />
              <p>Hosted by: Jane Doe</p>
            </div>
            <div>Sep 22, 2021</div>
          </div>
          <div className="flex gap-[20px] ">
            <ButtonSubscribe
              children={"SUBSCRIBE"}
              style={{ width: "160px", height: "62px" }}
            ></ButtonSubscribe>
            <button
              className=" flex justify-center items-baseline
 border-2 border-black rounded-lg px-9 py-5 w-[268px] h-[64px] shadow-[6px_6px_0_0_rgba(0,0,0,0.25)] bg-[rgba(255,255,255,0.01)]"
            >
              <svg
                width="11"
                height="15"
                viewBox="0 0 11 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11 7.48867C11 5.59603 1.85356 -0.458727 0.816006 0.629958C-0.221548 1.71864 -0.321313 13.1561 0.816006 14.3474C1.95333 15.5428 11 9.38131 11 7.48867Z"
                  fill="black"
                />
              </svg>
              LISTEN NOW (46 min)
            </button>
          </div>
        </div>
      </div>
      <div className="pb-[140px]">
        <h2 className="font-bold text-[59px] leading-[120%] tracking-[-0.02em] text-center text-black mt-[140px] mb-[140px]">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M61.7292 59.1452C61.4792 58.1452 61.3334 57.3327 61.0626 56.541C58.3542 48.541 54.0001 41.416 49.0417 34.6452C48.4584 33.8535 47.7292 33.1035 46.9167 32.6035C46.4792 32.3327 45.6042 32.3744 45.1042 32.6452C44.7292 32.8535 44.4584 33.666 44.5417 34.1244C44.6876 34.9994 45.0001 35.8952 45.4376 36.6869C48.3126 41.916 51.2084 47.1244 54.1459 52.3119C55.2501 54.2494 56.4167 56.166 57.5626 58.0827C57.9376 58.7285 58.3542 59.3535 58.7917 59.9369C59.2709 60.6035 60.0001 60.9994 60.7292 60.5619C61.2084 60.2702 61.7292 60.0619 61.7292 59.1452Z"
              fill="#CD4631"
            />
            <path
              d="M32.2291 90.1667C33.2291 90 34.3958 89.875 35.5208 89.625C39.9583 88.625 44.3958 87.625 48.8125 86.5833C49.7708 86.3542 50.7083 85.9583 51.5625 85.5C52.7083 84.8958 53.1041 84.0417 52.9166 83.1042C52.7291 82.1667 51.9792 81.5833 50.6667 81.5625C49.7708 81.5417 48.8125 81.5625 47.9583 81.7708C42.3541 83.1875 36.75 84.6458 31.1667 86.125C30.5417 86.2917 29.8958 86.5833 29.4167 87C28.2083 88.0208 28.5833 89.625 30.125 90.0208C30.7292 90.1667 31.4166 90.1042 32.2291 90.1667Z"
              fill="#CD4631"
            />
            <path
              d="M90.7708 34.3121C90.6875 33.333 90.4791 32.3538 90.2291 31.3955C90 30.5413 89.4166 29.9371 88.4791 29.8538C87.6875 29.7913 86.8333 30.583 86.7083 31.6246C86.5416 33.0205 86.3958 34.4371 86.4583 35.833C86.6458 40.0413 86.9166 44.2705 87.2083 48.4788C87.3125 49.8746 87.5 51.2705 87.7291 52.6663C87.8125 53.1455 87.9791 53.6455 88.25 54.0205C88.9791 55.083 90.3125 54.9996 90.8333 53.8538C91.125 53.208 91.25 52.4163 91.25 51.708C91.3541 49.3746 91.0416 37.7705 90.7708 34.3121Z"
              fill="#CD4631"
            />
          </svg>
          Latest Episode
        </h2>
        <div className={styles.category}>
          <p>All</p>
          <p>Business</p>
          <p>News</p>
          <p>Tips & Trick</p>
          <p>Podcast</p>
          <p>Productivity</p>
        </div>
        <PodcastCarts />
        <svg
          width="292"
          height="328"
          viewBox="0 0 292 328"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M60.9959 142.845C66.7996 142.876 71.715 142.779 76.6136 142.961C84.9228 143.235 93.1166 143.877 100.806 147.642C108.603 151.47 112.839 157.717 112.646 166.218C112.519 171.437 110.977 176.608 109.884 181.751C109.446 183.76 108.435 185.678 107.347 188.562C111.429 186.492 114.61 184.816 117.857 183.275C125.776 179.476 133.547 175.35 141.675 172.104C152.791 167.601 161.234 171.561 165.37 182.897C166.988 187.344 167.535 192.23 168.522 196.938C168.81 198.355 168.891 199.798 169.106 201.509C174.792 195.41 180.111 189.532 185.619 183.908C198.484 170.791 210.513 178.457 215.385 190.268C216.689 193.426 217.242 196.969 217.821 200.382C218.131 202.678 217.196 204.881 214.657 205.195C212.361 205.506 211.201 203.681 210.58 201.59C209.938 199.536 209.431 197.415 208.576 195.478C207.573 193.215 206.534 190.931 205.107 188.904C201.08 183.212 196.65 182.386 191.162 186.723C187.283 189.776 183.835 193.414 180.393 196.96C177.189 200.258 174.125 203.733 171.06 207.208C169.46 208.979 167.788 210.708 165.191 210.123C162.207 209.458 161.712 206.815 161.243 204.379C160.626 201.28 160.48 198.117 159.692 195.064C158.748 191.199 157.711 187.329 156.192 183.709C154.116 178.806 151.362 177.409 146.219 178.817C141.303 180.165 136.35 181.828 131.705 183.957C121.777 188.569 112.054 193.493 102.311 198.452C100 199.62 97.9153 200.148 95.892 198.403C93.9561 196.756 94.2914 194.592 95.1485 192.44C96.685 188.613 98.4075 184.796 99.7427 180.9C100.9 177.478 102.027 173.943 102.539 170.39C103.93 160.897 100.584 155.693 91.6161 152.392C84.8776 149.897 77.8693 148.786 70.7331 148.563C65.5916 148.385 60.4485 148.543 55.3319 148.572C52.6237 148.596 49.8225 148.614 48.6061 145.554C47.4923 142.65 49.2282 140.477 51.0306 138.438C51.8096 137.589 52.7121 136.859 53.5786 136.108C55.3475 134.628 57.0498 133.013 58.9575 131.708C73.0792 121.916 75.0367 108.275 71.141 92.9394C70.4145 90.1144 68.7982 87.4972 67.5026 84.8247C66.8728 83.4988 65.8237 82.3158 65.3647 80.9442C65.0125 79.971 64.9213 78.3788 65.4976 77.7974C66.1155 77.1438 67.6869 77.0888 68.653 77.1654C70.7504 77.366 72.8626 78.8742 74.0753 80.4404C76.4647 83.5519 78.7442 86.9368 80.1132 90.5658C83.1783 98.5901 83.642 107.037 82.6065 115.581C81.7213 122.864 77.9591 128.63 72.6508 133.408C69.1434 136.483 65.4307 139.247 60.9959 142.845Z"
            fill="black"
          />
        </svg>
      </div>
      <DownLoad />
      <Footer />
    </>
  );
}

export default PodcastDetale;
