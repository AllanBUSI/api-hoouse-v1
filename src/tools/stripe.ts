    // if (body.prenium == "true") {
    //   try {
    //     console.log(body.month);
    //     const token = await CreateToken({
    //       cvc: body.ccv,
    //       number: body.number,
    //       month: body.month,
    //       year: body.year,
    //     });
    //     const customer = await CreateCustomer(user.email, token);
    //     const abonnement = await CreateAbonnement(customer.id);
    //     const prenium = new Prenium();
    //     prenium.idStripe = abonnement.id;
    //     prenium.idAd = adToUpdate.idAd;
    //     await db.save(prenium);
    //   } catch (err) {
    //     return res.status(409).json({
    //       error: true,
    //       message:
    //         "Impossible de recevoir le paiement, veuillez vérifier les informations",
    //       reference: adToUpdate.reference,
    //     });
    //   }
    // }