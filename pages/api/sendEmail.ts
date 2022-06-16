import type { NextApiRequest, NextApiResponse } from 'next';

import client from '@utils/Client';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Response>
) {
    try {
        const { firstName, lastName, phoneNumber, email, message } = JSON.parse(
            req.body
        );

        await client.create({
            _type: 'receivedEmail',
            firstName,
            lastName,
            phoneNumber,
            email,
            message,
        });
    } catch (err: any) {
        return res
            .status(500)
            .json({
                message: 'Failed to submit message! Try again later.',
                success: false,
            });
    }
    return res
        .status(200)
        .json({ message: 'Successfully submitted message!', success: true });
}

type Response = {
    message: any;
    success: boolean;
};
