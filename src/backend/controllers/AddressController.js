import { v4 as uuid } from "uuid";
import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";

/**
 * All the routes related to Address are present here.
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */

/**
 * This handler handles getting items to user's addresses.
 * send GET Request at /api/user/addresses
 * */
export const getAllAddressHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  if (!userId) {
    new Response(
      404,
      {},
      {
        errors: ["The email you entered is not Registered. Not Found error"],
      }
    );
  }
  const userAddress = schema.users.findBy({ _id: userId }).address;
  return new Response(200, {}, { addresses: userAddress });
};

/**
 * This handler handles adding items to user's addresses.
 * send POST Request at /api/user/addresses
 * body contains {address}
 * */

export const addAddressHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const _id = uuid();
    const userAddress = schema.users.findBy({ _id: userId }).address;
    const { address } = JSON.parse(request.requestBody);
    userAddress.push({
      ...address,
      _id,
      createdAt: formatDate(),
      updatedAt: formatDate(),
    });
    this.db.users.update({ _id: userId }, { address: userAddress });
    return new Response(201, {}, { address: userAddress });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles removing items to user's addresses.
 * send DELETE Request at /api/user/addresses/:addressId
 * */

export const deleteAddressHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    let userAddress = schema.users.findBy({ _id: userId }).address;
    const addressId = request.params.addressId;
    userAddress = userAddress.filter((item) => item._id !== addressId);
    this.db.users.update({ _id: userId }, { address: userAddress });
    return new Response(200, {}, { address: userAddress });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles adding items to user's addresses.
 * send POST Request at /api/user/addresses/:addressId
 * body contains {address}
 * */

export const updateAddressHandler = function (schema, request) {
  const addressId = request.params.addressId;
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const userAddress = schema.users.findBy({ _id: userId }).address;
    const { updatedAddress } = JSON.parse(request.requestBody);
    userAddress.forEach((address) => {
        if ( address._id === addressId) {
            address.addressDetails.nickName = updatedAddress.nickName;
            address.addressDetails.addLine1 = updatedAddress.addLine1;
            address.addressDetails.addLine2 = updatedAddress.addLine2;
            address.addressDetails.addLine3 = updatedAddress.addLine3;
            address.addressDetails.city = updatedAddress.city;
            address.addressDetails.state = updatedAddress.state;
            address.addressDetails.country = updatedAddress.country;
            address.addressDetails.pincode = updatedAddress.pincode;
            address.updatedAt = formatDate();
        }
    });
    this.db.users.update({ _id: userId }, { address: userAddress });
    return new Response(200, {}, { address: userAddress });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};