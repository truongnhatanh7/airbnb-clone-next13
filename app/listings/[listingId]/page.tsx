import getCurrentUser from '@/app/actions/getCurrentUser';
import { getListingById } from '@/app/actions/getListingById';
import { ClientOnly } from '@/app/components/ClientOnly';
import { EmptyState } from '@/app/components/EmptyState';
import React from 'react'
import { ListingClient } from './ListingClient';
import { getReservations } from '@/app/actions/getReservations';

interface IParams {
  listingId?: string;
}

// This is a server component -> no hooks, but params still can be accessed via this way
const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();
  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    )
  }
  return (
    <div>
      <ListingClient 
        listing={listing}
        reservations={reservations}
        currentUser={currentUser}
      />
    </div>
  )
}

export default ListingPage;
