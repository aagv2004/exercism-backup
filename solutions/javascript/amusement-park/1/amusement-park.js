/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
export function createVisitor(name, age, ticketId) {
  const visitor = {}
  visitor.name = name;
  visitor.age = age;
  visitor.ticketId = ticketId;
  return visitor;
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
export function revokeTicket(visitor) {
  for (let key in visitor) {
    if (key === 'ticketId') {
      visitor[key] = null;
    }
  }
  return visitor;
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function ticketStatus(tickets, ticketId) {
  let valorTicket = tickets[ticketId];
  let msg;
  if (ticketId in tickets) {
     if (valorTicket === null) {
       msg = "not sold"
     } else {
       msg = `sold to ${valorTicket}`
     }
  } else {
    msg = "unknown ticket id"
  }
  return msg;
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {
  let valorTicket = tickets[ticketId];
  let msg;

  if (ticketId in tickets && valorTicket !== null) {
    msg = valorTicket;
  } else {
    msg = `invalid ticket !!!`;
  }
  return msg;
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
export function gtcVersion(visitor) {
  let msg;
  
  if ('gtc' in visitor) {
    msg = visitor['gtc'].version;
  } else {
    msg = undefined;
  }

  return msg;
}
