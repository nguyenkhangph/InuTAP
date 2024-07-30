import { useState, useEffect } from "react";
import { TonConnectButton, useTonConnectUI } from "@tonconnect/ui-react";
import hamsterCoinIcon from "../images/hamster-coin.png";
import tonWalletIcon from "../images/ton-wallet-icon.png";

const AirdropPage = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [tonConnectUI] = useTonConnectUI();

  useEffect(() => {
    console.log("useEffect called with tonConnectUI:", tonConnectUI);
    const wallet = tonConnectUI?.wallet;
    if (wallet) {
      console.log("Wallet connected with address:", wallet.account.address);
      setWalletAddress(wallet.account.address);
    }
  }, [tonConnectUI]);

  console.log("Rendering AirdropPage with walletAddress:", walletAddress);

  return (
    <div className="bg-black text-white h-screen flex flex-col items-center">
      <div className="w-full max-w-xl px-4 pt-4">
        <div className="flex justify-center mt-4">
          <img src={hamsterCoinIcon} alt="Hamster Coin" className="w-20 h-20" />
        </div>
        <h2 className="text-2xl mt-4">Airdrop tasks</h2>
        <p className="text-sm text-gray-400 mt-1">
          Listing day is coming. Tasks will appear below. Complete them to join
          the Airdrop.
        </p>

        <h3 className="text-lg mt-6">Task List</h3>
        <div className="bg-[#272a2f] p-4 mt-2 rounded-xl flex items-center justify-between">
          <div className="flex items-center">
            <img src={tonWalletIcon} alt="TON Wallet" className="w-10 h-10" />
            <div className="ml-4">
              <p className="text-sm">Connect your TON wallet</p>
            </div>
          </div>
          {walletAddress ? (
            <div className="text-sm text-white">{walletAddress}</div>
          ) : (
            <TonConnectButton />
          )}
        </div>
      </div>
    </div>
  );
};

export default AirdropPage;
