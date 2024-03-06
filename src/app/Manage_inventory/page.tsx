"use client";
import Head from "next/head";
import ManageInv from "@/components/ManageInv";
import Nav from "@/components/Nav";

const ManageInventory = () => {
  return (
    <>
      <Nav />
      <Head>
        <title>Manage Inventory</title>
      </Head>
      <ManageInv />
    </>
  );
};

export default ManageInventory;
