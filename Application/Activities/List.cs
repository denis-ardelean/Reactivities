using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities
{
    public class List
    {
        public class Query : IRequest<List<Activity>> { }

        public class Handler(DataContext context) : IRequestHandler<Query, List<Activity>>
        {
            private DataContext _context = context;

            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken) => await _context.Activities.ToListAsync();
        }
    }
}